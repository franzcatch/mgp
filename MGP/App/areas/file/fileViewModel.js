define([],
    function () {
        var viewModel;

        viewModel = function (files) {
            var self = this;

            var $window = $(window);
            $window.resize(function () {
                self.setHeight();
            });

            self.setHeight = function () {
                var fileContainer = $('.fileContainer');

                if (fileContainer.height()) {
                    fileContainer.height("500px");
                }
            };

            self.files = ko.observableArray(files);

            self.selectedFile = ko.observable();

            //self.selectedFile.subscribe(function () {
            //    var iframe = $('.fileContainer').parent().find('iframe');
            //    if (iframe.length > 0) {
            //        iframe.attr('src', self.selectedFile().url);
            //    } else {
            //        $('.fileContainer').attr("href", self.selectedFile().url);
            //        $('.fileContainer').media({ width: 500, height: 400 });
            //    }
            //});

            self.renderFile = ko.computed(function () {
               // var container = $('.fileContainer');

                if (self.selectedFile() &&
                    self.selectedFile().url &&
                    self.selectedFile().url.length > 0 &&
                    self.selectedFile().text &&
                    self.selectedFile().text.length > 0) {

                    //$('a.media').media({ width: 500, height: 400 });

                    //$('#fileContainer').html('');
                    //var success = new PDFObject({ url: self.selectedFile().url }).embed("fileContainer");

                    //container.attr("href", self.selectedFile().url);
                    //container.text(self.selectedFile().text);
                }

                //container.media({ width: "100%", height: "500px" });

                //self.setHeight();
            });

            return self;
        };

        return viewModel;
    });