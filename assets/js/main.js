var rangeSlider = angular.module('app', ['ui.router']);

    rangeSlider.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/index.html");
        $stateProvider
    		 .state('slider',  {
    			    name: 'slider',
    			    url: '/slider/{min}{max}',
    			    template: '',
                        params: {
                            min: undefined,
                            max: undefined
                        }
    			  })
    		.state('message', {
    			    name: 'message',
    			    url: '/message',
                    controller: 'MessageController',
                    controllerAs: 'Your',
    			    templateUrl: 'tpl/message.html'
    			  });
    })
    .controller('RangeSliderController', function($scope, $window, $state, $stateParams){
        var self = this;
        self.app = 'Happy Route Slider';

        self.state = $state;


        $scope.RangeSliderController = this;

        active();

        function active(){
            console.dir(self.state);

            var slider = document.getElementById('video-size');

            noUiSlider.create(slider, {
                start: [245, 1750],
                connect: true,
                step: 5,
                range: {
                    'min': 0,
                    'max': 2000
                },
                format: wNumb({
                    decimals: 3,
                    thousand: '.',
                    postfix: ' px',
                })
            });

            var selectedMin = document.getElementById('sizeMinValue');
            var selectedMax = document.getElementById('sizeMaxValue');

            slider.noUiSlider.on('update', function( values, handle ) {

                var value = values[handle];
                var stateID = (value) => { 
                     return wNumb({
                                decimals: 3,
                                thousand: '.',
                                postfix: ' px',
                            }).from(value);
                };

                if ( handle ) {
                    selectedMax.value = value;
                    $state.go('slider', {  min: 'min-' + stateID(values[0]),
                                           max: ',max-' + stateID(values[1])});
                    
                } else {
                    selectedMin.value = value;
                    $state.go('slider', {  min: 'min-' + stateID(values[0]),
                                           max: ',max-' + stateID(values[1])});
                }
            });

            selectedMin.addEventListener('change', function(){
                slider.noUiSlider.set([this.value, null]);
            });

            selectedMax.addEventListener('change', function(){
                slider.noUiSlider.set([null, this.value]);
            });
        }
    })
    .controller('MessageController', function($scope) {
        var self = this;

        self.messages = [ 'Merry Christmas & Happy New Year',
            'Wishing you a Merry Christmas!',
            'Unwrap yourself a joyful Christmas!',
            'Have a holly, jolly Christmas!',
            'Merry Christmas with lots of love.',
            'The best present one can hope for this year is to spend time together. I can’t wait to celebrate the holidays with you.',
            'Have yourself a Merry little Christmas, Let your heart be light.',
            'Ho Ho Hope you’ve been good this year. Merry Christmas!',
            'It’s the most wonderful time of the year! Let us celebrate by spreading goodwill and Christmas cheer!',
            'May the spirit of Christmas be with you throughout the New Year.',
            'May the sights and sounds of Christmas work their merry magic in your heart.',
            'May the sweet magic of Christmas conspire to gladden your heart and fill every desire.',
            'May this Christmas end the present year on a cheerful note and make way for a fresh and bright New Year. Here’s wishing you a Merry Christmas and Happy New Year.',
            'May the Christmas season fill your home with joy, your heart with love and your life with laughter.'];

        self.pullMessage = function(){
            var len = self.messages.length;
            var id = Math.random() * len | 0;
            return self.messages[id];
        };

        self.message = self.pullMessage();


    });


