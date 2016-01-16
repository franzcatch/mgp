ko.bindingHandlers.pdfLoader = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var url;

        if (!valueAccessor().url) {
            console.error('Must provide a url parameter');
            return;
        }

        if (!ko.isObservable(valueAccessor().url)) {
            console.error('url parameter must be observable');
            return;
        }

        $(element).append('<a class="pdfLoader"></a>');

        url = valueAccessor().url;

        url.subscribe(function (newValue) {
            var iframe = $(element).find('iframe');
            if (iframe.length > 0) {
                iframe.attr('src', newValue.url);
            } else {
                var a = $(element).find('.pdfLoader');
                a.attr("href", newValue.url);
                a.media({ width: 500, height: 400 });
            }
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            var asdf = '';//$(element).datepicker("destroy");
        });
    }
};
