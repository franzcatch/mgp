define(['file/fileViewModel'],
    function (fileViewModel) {
        var viewModel;

        viewModel = function () {
            var self = this;

            var files = [
                {
                    text: 'Support Letter from University of Missouri St. Louis',
                    url: '/files/about/Letter%20of%20Support%20-%20UMSL.pdf'
                },
                {
                    text: 'Support Letter from Rotary Club de Lince',
                    url: '/files/about/Letter%20of%20Support%20RotaryClub%20deLince.pdf'
                },
                {
                    text: 'Support Letter from HCCSTL',
                    url: '/files/about/Letter%20of%20support%20-%20HCCSTL.pdf'
                },
                {
                    text: 'Support Letter from St. Louis Potosi',
                    url: '/files/about/Letter%20of%20Support%20STL%20Potosi.pdf'
                },
                {
                    text: 'MGP Campaign Program Description 2013',
                    url: '/files/about/MGP%20Campaign%20Program%20Description%202013.pdf'
                },
                {
                    text: 'MGP Executive Summary 2013',
                    url: '/files/about/MGP%20Executive%20Summary%202013.pdf'
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