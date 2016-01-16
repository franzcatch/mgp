define(['file/fileViewModel'],
    function (fileViewModel) {
        var viewModel;

        viewModel = function () {
            var self = this;

            var files = [
                {
                    text: 'Awareness About History Poverty in Latin-America',
                    url: 'app/files/History/Awareness%20About%20Poverty%20in%20Latin-America.pdf'
                },
                {
                    text: 'Conceptos basicos y estadisticas de la pobreza en el Perú',
                    url: 'app/files/History/Conceptos%20basicos%20y%20estadisticas%20de%20la%20pobreza%20en%20el%20Perú.pdf'
                },
                {
                    text: 'Enacts the Law on International Technical Cooperation- Peru (101191)',
                    url: 'app/files/History/Enacts%20the%20Law%20on%20International%20Technical%20Cooperation-%20Peru%20(101191).pdf'
                },
                {
                    text: 'La pobreza en el Perú en el año 2007',
                    url: 'app/files/History/La%20pobreza%20en%20el%20Perú%20en%20el%20año%202007.pdf'
                },
                {
                    text: 'Meeting the Millennium',
                    url: 'app/files/History/Meeting the Millennium.pdf'
                },
                {
                    text: 'On Track to Meeting Poverty Reduction Target',
                    url: 'app/files/History/On%20Track%20to%20Meeting%20Poverty%20Reduction%20Target.pdf'
                },
                {
                    text: 'Peru Censo 2007 Pobreza 1',
                    url: 'app/files/History/Peru%20Censo%202007%20Pobreza%201.pdf'
                },
                {
                    text: 'Peru Censo 2007 Pobreza 2',
                    url: 'app/files/History/Peru%20Censo%202007%20Pobreza%202.pdf'
                },
                {
                    text: 'Peru Census Poverty 2007',
                    url: 'app/files/History/Peru%20Census%20Poverty%202007.pdf'
                },
                {
                    text: 'Política Nacional de Cooperación Técnica Internacional',
                    url: 'app/files/History/Política%20Nacional%20de%20Cooperación%20Técnica%20Internacional.pdf'
                },
                {
                    text: 'Poverty LA CEDLAS 2011',
                    url: 'app/files/History/Poverty%20LA%20CEDLAS%202011.pdf'
                },
                {
                    text: 'Poverty LAC 2011 - Latin America Statistics',
                    url: 'app/files/History/Poverty%20LAC%202011%20-%20Latin%20America%20Statistics.pdf'
                },
                {
                    text: 'Poverty Official LAC - Jul 2011 (1) By Country - Sumary IRS',
                    url: 'app/files/History/Poverty%20Official%20LAC%20-%20Jul%202011%20(1)%20By%20Country%20-%20Sumary%20IRS.pdf'
                },
                {
                    text: 'Poverty Official LAC - Jul2011 (1) By Country',
                    url: 'app/files/History/Poverty%20Official%20LAC%20-%20Jul2011%20(1)%20By%20Country.pdf'
                },
                {
                    text: 'US Census',
                    url: 'app/files/History/US%20Census.pdf'
                }
            ];
            
            self.fileVm = new fileViewModel(files);

            $.get('app/areas/file/fileView.htm', function (data) {
                var element = $(".historyContainer");
                element.html(data);
                ko.applyBindingsToDescendants(self.fileVm, element[0]);
            });

            return self;
        };

        return viewModel;
    });