define(['file/fileViewModel'],
    function (fileViewModel) {
        var viewModel;

        viewModel = function () {
            var self = this;

            var files = [
                {
                    text: 'Legal Info',
                    url: 'app/files/Legal/Legal Info.pdf'
                },
                {
                    text: 'MGP Conflict of Interest Policy',
                    url: 'app/files/Legal/MGP Conflict of Interest Policy.pdf'
                }
            ];
            
            self.fileVm = new fileViewModel(files);

            $.get('app/areas/file/fileView.htm', function (data) {
                var element = $(".legalContainer");
                element.html(data);
                ko.applyBindingsToDescendants(self.fileVm, element[0]);
            });

            return self;
        };

        return viewModel;
    });