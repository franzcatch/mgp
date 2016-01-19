define(['file/fileViewModel'],
    function (fileViewModel) {
        var viewModel;

        viewModel = function () {
            var self = this;

            var files = [
                {
                    text: 'Mission Vision Objectives October  2013(1)',
                    url: 'app/files/mission/Mission%20Vision%20Objectives%20October%202013(1).pdf'
                }
            ];
            
            self.fileVm = new fileViewModel(files);

            $.get('app/areas/file/fileView.htm', function (data) {
                var element = $(".missionContainer");
                element.html(data);
                ko.applyBindingsToDescendants(self.fileVm, element[0]);
            });

            return self;
        };

        return viewModel;
    });