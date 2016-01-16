define(['file/fileViewModel'],
    function (fileViewModel) {
        var viewModel;

        viewModel = function () {
            var self = this;

            ko.bindingHandlers.ready = {
                update: function (element, valueAccessor) {
                    $('.zoom-gallery').magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        closeOnContentClick: false,
                        closeBtnInside: false,
                        mainClass: 'mfp-with-zoom mfp-img-mobile',
                        image: {
                            verticalFit: true,
                            titleSrc: function (item) {
                                return item.el.attr('title') + ' &middot;';
                            }
                        },
                        gallery: {
                            enabled: true
                        },
                        zoom: {
                            enabled: true,
                            duration: 300, // don't foget to change the duration also in CSS
                            opener: function (element) {
                                return element.find('img');
                            }
                        }
                    });
                }
            };

            self.images = ko.observableArray([
                {
                    href: "app/images/project/Photos/Leonidas Gutierrez  MGP President - Founder.jpg",
                    thumb: "app/images/project/Thumbs/Leonidas Gutierrez  MGP President - Founder.jpg"
                },
                {
                    href: "app/images/project/Photos/IMG_1053.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1053.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1056.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1056.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1111.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1111.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1113.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1113.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1147.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1147.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1150.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1150.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1154.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1154.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1204.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1204.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1208.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1208.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1209.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1209.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1210.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1210.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1542.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1542.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1543.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1543.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1544.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1544.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1567.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1567.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1576.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1576.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1604.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1604.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1605.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1605.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1629.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1629.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1641.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1641.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1658.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1658.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1688.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1688.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1696.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1696.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1708.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1708.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1709.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1709.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1755.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1755.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1756.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1756.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1792.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1792.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1815.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1815.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1824.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1824.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1825.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1825.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1836.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1836.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1851.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1851.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1861.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1861.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1867.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1867.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1941.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1941.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_1975.JPG",
                    thumb: "app/images/project/Thumbs/IMG_1975.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2050.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2050.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2072.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2072.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2074.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2074.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2079.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2079.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2184.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2184.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2191.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2191.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2235.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2235.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2267.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2267.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2269.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2269.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2276.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2276.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2387.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2387.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2472.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2472.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2480.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2480.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2492.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2492.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2599.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2599.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2600.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2600.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2607.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2607.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2614.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2614.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2616.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2616.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2617.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2617.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2618.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2618.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2622.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2622.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2623.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2623.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2638.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2638.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2641.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2641.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2653.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2653.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2658.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2658.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2717.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2717.JPG"
                },
                {
                    href: "app/images/project/Photos/IMG_2745.JPG",
                    thumb: "app/images/project/Thumbs/IMG_2745.JPG"
                }
            ]);

            return self;
        };

        return viewModel;
    });
