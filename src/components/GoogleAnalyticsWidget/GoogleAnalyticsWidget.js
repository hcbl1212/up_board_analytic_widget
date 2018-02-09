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
            ids: "ga:57129211",
            client_id: '408434003434-pf5bmmfvag0g4u710i7p5r1bu02rc86j.apps.googleusercontent.com'
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
        }
				componentWillReceiveProps(nextProps) {
					this.setState({
						widgetText: nextProps.widgetText
					});
				}
			  render(){
        const CLIENT_ID = '408434003434-pf5bmmfvag0g4u710i7p5r1bu02rc86j.apps.googleusercontent.com';
        const last30days = {
          reportType: "ga",
          query: {
              dimensions: "ga:date",
              metrics: "ga:pageviews",
              "start-date": "30daysAgo",
              "end-date": "yesterday"
            },
            chart: {
                type: "LINE",
                options: {
                      title: "Last 30 days pageviews"
                }
            }
          }

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

        const views = {
          query: {
            ids: "ga:57129211"
          }
        }

  					return(
                  <GoogleProvider clientId={CLIENT_ID}>
                    <GoogleDataChart views={views} config={last30days} />
                    <GoogleDataChart views={views} config={last7days} />
                  </GoogleProvider>
					  )
				}
			}
    }
  };
});
