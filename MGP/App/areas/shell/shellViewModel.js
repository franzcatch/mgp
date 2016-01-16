define([],
    function () {
        var viewModel;

        viewModel = function() {
            var self = this;

            self.requireVm = function(module) {
                return function(callback) {
                    require([module], function (mod) {
                        callback(new mod());
                    });
                };
            };
            
            self.showPage = function(page) {
                page.show();
            };

            var location = window.location.href.lastIndexOf("/");
            var lastItem = window.location.href.substring(location + 1);

            self.targetHref = ko.observable(lastItem);

            self.headerClick = function (href) {
                self.targetHref(href);
            };

            self.buttons = ko.observableArray([
                {
                    href: 'start',
                    title: 'Home'
                },
                {
                    href: 'photos',
                    title: 'Photos'
                },
                {
                    href: 'donate',
                    title: 'Donate'
                },
                {
                    href: 'mission',
                    title: 'Mission'
                },
                {
                    href: 'history',
                    title: 'History'
                },
                {
                    href: 'volunteer',
                    title: 'Volunteer'
                },
                {
                    href: 'legal',
                    title: 'Legal'
                },
                {
                    href: 'contact',
                    title: 'Friends & Partners'
                },
                {
                    href: 'about',
                    title: 'About MGP'
                }
            ]);

            return self;
        };

        return viewModel;
    });