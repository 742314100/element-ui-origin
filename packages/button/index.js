import WlButton from './src/button';

/* istanbul ignore next */
WlButton.install = function(Vue) {
  Vue.component(WlButton.name, WlButton);
};

export default WlButton;
