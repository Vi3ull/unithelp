(function($){
    var OctoberLayout = function() {
    }

    OctoberLayout.prototype.setPageTitle = function(title) {
        var $title = $('title')

        if (this.pageTitleTemplate === undefined)
            this.pageTitleTemplate = $title.data('titleTemplate')

        $title.text(this.pageTitleTemplate.replace('%s', title))
    }

    OctoberLayout.prototype.updateLayout = function(title) {
        var $children, $el, fixedWidth, margin

        $('[data-calculate-width]').each(function(){
            $children = $(this).children()

            if ($children.length > 0) {
                fixedWidth = 0

                $children.each(function() {
                    $el = $(this)
                    margin = $el.data('oc.layoutMargin')

                    if (margin === undefined) {
                        margin = parseInt($el.css('marginRight')) + parseInt($el.css('marginLeft'))
                        $el.data('oc.layoutMargin', margin)
                    }
                    fixedWidth += $el.get(0).offsetWidth + margin
                })

                $(this).width(fixedWidth)
                $(this).trigger('oc.widthFixed')
            }
        })
    }

    if ($.oc === undefined)
        $.oc = {}

    $.oc.layout = new OctoberLayout()

    $(document).ready(function(){
        $.oc.layout.updateLayout()

        window.setTimeout($.oc.layout.updateLayout, 100)
    })
    $(window).on('resize', function() {
        $.oc.layout.updateLayout()
    })
    $(window).on('oc.updateUi', function() {
        $.oc.layout.updateLayout()
    })
})(jQuery);