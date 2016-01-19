define(['file/fileViewModel'],
    function (fileViewModel) {
        var viewModel;

        viewModel = function () {
            var self = this;

            var files = [
                {
                    text: 'Volunteers',
                    url: 'app/files/volunteer/Volunteers.pdf'
                },
                {
                    text: 'How to get INVOLVED with the MGP Program',
                    url: 'app/files/volunteer/How%20to%20get%20INVOLVED%20with%20the%20MGP%20Program.pdf'
                }
            ];

            self.fileVm = new fileViewModel(files);

            $.get('app/areas/file/fileView.htm', function (data) {
                var element = $(".aboutContainer");
                element.html(data);
                ko.applyBindingsToDescendants(self.fileVm, element[0]);
            });

            return self;
        };

        return viewModel;
    });