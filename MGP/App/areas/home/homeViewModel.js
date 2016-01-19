define([],
    function () {
        var viewModel;

        viewModel = function () {
            var self = this;

            self.images = ko.observableArray();
            self.width = '';
            self.height = '';
            self.imageUrls = {};
            self.interval = '';
            self.transition = {};
            self.loading = ko.observable(true);
            self.imageViewModels = [];
            self.jsInt = '';

            self.loadImageViewer = function (options) {
                self.width = options.width + 'px';
                self.height = options.height + 'px';
                self.imageUrls = options.images;
                self.interval = options.interval;
                self.transition = options.transition;
                self.loading = ko.observable(true);
                
                options.images.forEach(function (image) {
                    var imageViewModel = { url: image, active: ko.observable(false) };
                    self.imageViewModels.push(imageViewModel);
                });

                self.imageViewModels[0].active(true);
                self.jsInt = setInterval(self.nextImage, self.interval);
                self.loadFirstImage();
            };

            self.nextImage = function () {
                self.images.valueWillMutate();
                var top = self.images.pop();
                var ind = self.imageViewModels.indexOf(top);
                var nextInd = (ind + 2) % self.imageViewModels.length;
                var next = self.imageViewModels[nextInd];
                self.images.unshift(next);
                top.active(false);
                self.images()[1].active(true);
                self.images.valueHasMutated();
            };

            self.onCtrlClick = function (imageVM) {
                if (imageVM == self.images()[1]) {
                    return;
                }
                clearInterval(self.jsInt);
                var top = self.images.pop();
                self.images()[0] = imageVM;
                var ind = self.imageViewModels.indexOf(imageVM);
                var nextInd = (ind + 1) % self.imageViewModels.length;
                var next = self.imageViewModels[nextInd];
                self.images.unshift(next);
                top.active(false);
                imageVM.active(true);
                self.images.valueHasMutated();
                self.jsInt = setInterval(self.nextImage, self.interval);
            };

            self.removeDecorator = function (elem) {
                var removeElement = function () { elem.parentNode.removeChild(elem); };
                elem.addEventListener('webkitTransitionEnd', removeElement);
                elem.addEventListener('TransitionEnd', removeElement);
                elem.style.left = self.width;
                elem.style['-webkit-transition'] = elem.style['transition'] = self.transition;
            };

            self.loadFirstImage = function () {
                var first = self.imageUrls.shift();
                var imageEl = document.createElement('img');
                self.images.push(self.imageViewModels[0]);
                self.images.unshift(self.imageViewModels[1]);
//                self.loading(false);
                self.imageUrls.shift();
                self.loadOtherImages();

                imageEl.src = first;
            };

            self.loadOtherImages = function () {
                self.imageUrls.forEach(function (image) {
                    var imageEl = document.createElement('img');
                    imageEl.addEventListener('load', function (e) {            //nothing yet
                    });
                    imageEl.src = image;
                });
            };

            self.loadImageViewer({
                images: [
                'app/images/project/photos/IMG_1053.JPG',
                'app/images/project/photos/IMG_1056.JPG',
                'app/images/project/photos/IMG_1111.JPG',
                'app/images/project/photos/IMG_1113.JPG',
                'app/images/project/photos/IMG_1147.JPG',
                'app/images/project/photos/IMG_1150.JPG',
                'app/images/project/photos/IMG_1154.JPG',
                'app/images/project/photos/IMG_1204.JPG',
                'app/images/project/photos/IMG_1208.JPG',
                'app/images/project/photos/IMG_1209.JPG',
                'app/images/project/photos/IMG_1210.JPG',
                'app/images/project/photos/IMG_1542.JPG',
                'app/images/project/photos/IMG_1543.JPG',
                'app/images/project/photos/IMG_1544.JPG',
                'app/images/project/photos/IMG_1567.JPG',
                'app/images/project/photos/IMG_1576.JPG',
                'app/images/project/photos/IMG_1604.JPG',
                'app/images/project/photos/IMG_1605.JPG',
                'app/images/project/photos/IMG_1629.JPG',
                'app/images/project/photos/IMG_1641.JPG',
                'app/images/project/photos/IMG_1658.JPG',
                'app/images/project/photos/IMG_1688.JPG',
                'app/images/project/photos/IMG_1696.JPG',
                'app/images/project/photos/IMG_1708.JPG',
                'app/images/project/photos/IMG_1709.JPG',
                'app/images/project/photos/IMG_1755.JPG',
                'app/images/project/photos/IMG_1756.JPG',
                'app/images/project/photos/IMG_1792.JPG',
                'app/images/project/photos/IMG_1815.JPG',
                'app/images/project/photos/IMG_1824.JPG',
                'app/images/project/photos/IMG_1825.JPG',
                'app/images/project/photos/IMG_1836.JPG',
                'app/images/project/photos/IMG_1851.JPG',
                'app/images/project/photos/IMG_1861.JPG',
                'app/images/project/photos/IMG_1867.JPG',
                'app/images/project/photos/IMG_1941.JPG',
                'app/images/project/photos/IMG_1975.JPG',
                'app/images/project/photos/IMG_2050.JPG',
                'app/images/project/photos/IMG_2072.JPG',
                'app/images/project/photos/IMG_2074.JPG',
                'app/images/project/photos/IMG_2079.JPG',
                'app/images/project/photos/IMG_2184.JPG',
                'app/images/project/photos/IMG_2191.JPG',
                'app/images/project/photos/IMG_2235.JPG',
                'app/images/project/photos/IMG_2267.JPG',
                'app/images/project/photos/IMG_2269.JPG',
                'app/images/project/photos/IMG_2276.JPG',
                'app/images/project/photos/IMG_2387.JPG',
                'app/images/project/photos/IMG_2472.JPG',
                'app/images/project/photos/IMG_2480.JPG',
                'app/images/project/photos/IMG_2492.JPG',
                'app/images/project/photos/IMG_2599.JPG',
                'app/images/project/photos/IMG_2600.JPG',
                'app/images/project/photos/IMG_2607.JPG',
                'app/images/project/photos/IMG_2614.JPG',
                'app/images/project/photos/IMG_2616.JPG',
                'app/images/project/photos/IMG_2617.JPG',
                'app/images/project/photos/IMG_2618.JPG',
                'app/images/project/photos/IMG_2622.JPG',
                'app/images/project/photos/IMG_2623.JPG',
                'app/images/project/photos/IMG_2638.JPG',
                'app/images/project/photos/IMG_2641.JPG',
                'app/images/project/photos/IMG_2653.JPG',
                'app/images/project/photos/IMG_2658.JPG',
                'app/images/project/photos/IMG_2745.JPG'],
                width: 300,
                height: 200,
                transition: '0.4s linear',
                interval: 5000
            });

            return self;
        };

        return viewModel;
    });