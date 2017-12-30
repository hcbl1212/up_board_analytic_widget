import '../../scss/GoogleAnalyticsWidget/GoogleAnalyticsWidget.scss';

definejs('GoogleAnalyticsWidget', function create (){

    return {
        createComponent: function (React, Component) {
          	return class GoogleAnalyticsWidget extends Component {

	          	constructor (props){
					super(props);
					this.state = {
						mode: this.props.mode,
						isEditing: this.props.mode == 'edit' ? true : false,
						widgetText : this.props.widgetText
					}
				}

				componentWillReceiveProps(nextProps) {
					this.setState({
						widgetText: nextProps.widgetText
					});
				}

			    render(){

					let widgetStyle = {
						textAlign : this.props.widgetStyle.textAlign,
						fontWeight : this.props.widgetStyle.isBold ? 'bold' : 'normal',
						color : this.props.widgetStyle.textColor,
						fontStyle : this.props.widgetStyle.isItalic ? 'italic' : 'normal',
						fontFamily : this.props.widgetStyle.fontFamily,
						fontSize : this.props.widgetStyle.fontSize
					}

					return(
						<div className='text-widget'>
							
						</div>
					)
				}
			}

        }
    };
});