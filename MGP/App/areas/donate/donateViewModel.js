define(['file/fileViewModel'],
    function (fileViewModel) {
        var viewModel;

        viewModel = function () {
            var self = this;

            var files = [
                {
                    text: 'A Charitable Nonprofit’s Guide to Public Disclosure Requirements',
                    url: 'app/files/donate/A%20Charitable%20Nonprofit’s%20Guide%20to%20Public%20Disclosure%20Requirements.pdf'
                },
                {
                    text: 'What we CAN and  CANNOT deduct - IRS REG',
                    url: 'app/files/donate/What%20we%20CAN%20and%20%20CANNOT%20deduct%20-%20IRS%20REG.pdf'
                }
            ];
            
            self.fileVm = new fileViewModel(files);

            $.get('app/areas/file/fileView.htm', function (data) {
                var element = $(".donateContainer");
                element.html(data);
                ko.applyBindingsToDescendants(self.fileVm, element[0]);
            });

            return self;
        };

        return viewModel;
    });