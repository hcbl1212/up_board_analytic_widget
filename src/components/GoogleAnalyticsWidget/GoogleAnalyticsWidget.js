import { GoogleProvider, GoogleDataChart } from 'react-analytics-widget'
import '../../scss/GoogleAnalyticsWidget/GoogleAnalyticsWidget.scss';

definejs('GoogleAnalyticsWidget', function create (){
  return {
    createComponent: function (React, Component) {
      return class GoogleAnalyticsWidget extends Component {
	      constructor (props){
					super(props);

          this.state = {
            ready: false,
						mode: this.props.mode,
						isEditing: this.props.mode == 'edit' ? true : false,
						widgetText: this.props.widgetText,
            CLIENT_ID: '408434003434-pf5bmmfvag0g4u710i7p5r1bu02rc86j.apps.googleusercontent.com',
            views: {query: {
                ids: "ga:139593193"
              }
            }
					}
          this.widgetStyle = {
						textAlign : this.props.widgetStyle.textAlign,
						fontWeight : this.props.widgetStyle.isBold ? 'bold' : 'normal',
						color : this.props.widgetStyle.textColor,
						fontStyle : this.props.widgetStyle.isItalic ? 'italic' : 'normal',
						fontFamily : this.props.widgetStyle.fontFamily,
						fontSize : this.props.widgetStyle.fontSize
					}
				}

        componentWillMount() {
        (function(w,d,s,g,js,fs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
  js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
}(window,document,'script'))

        }

        componentDidMount() {
          console.log(gapi.analytics)
          gapi.analytics.ready(function() {
            gapi.analytics.auth.authorize({
                container: 'embed-api-auth-container',
                clientid: this.CLIENT_ID
            })  

            //var viewSelector = new gapi.analytics.ViewSelector({
            //  container: 'view-selector-container'
            //}) 
          
            //viewSelector.execute()
            console.log('here')

            console.log(new gapi.analytics.googleCharts)
            let dataChart = new gapi.analytics.googleCharts.DataChart({
              query: {
                metrics: 'ga:sessions',
                dimensions: 'ga:date',
                'start-date': '30daysAgo',
                'end-date': 'yesterday'
              },
              chart: {
                container: 'chart-container',
                type: 'LINE',
                options: {
                  width: '100%'
                }
              }
            })
          dataChart.set(this.views).execute();
          //viewSelector.on('change', function(ids) {
          //  dataChart.set(this.views).execute();
          //})

          })
        }
				componentWillReceiveProps(nextProps) {
					this.setState({
						widgetText: nextProps.widgetText
					});
				}
			  render(){
          const last7days = {
            reportType: "ga",
            query: {
                dimensions: "ga:date",
                metrics: "ga:pageviews",
                "start-date": "7daysAgo",
                "end-date": "yesterday"
              },
            chart: {
                type: "LINE"
              }
          }

  					return(
						<div className='google-analytics-widget'>
              <div id="embed-api-auth-container"></div> 
              <div id="chart-container"></div> 
              <div id="view-selector-container"></div> 
						</div>
					)
				}
			}
    }
  };
});
