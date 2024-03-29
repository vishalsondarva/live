// Easy Responsive Tabs Plugin
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                tabidentify: '',
                // activetab_bg: 'white',
                // inactive_bg: '#F5F5F5',
                // active_border_color: '#c1c1c1',
                // active_content_border_color: '#c1c1c1',
                activate: function () {
                }
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);

            //Events
            $(this).bind('tabactivate', function (e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.respTabs_list.' + options.tabidentify);
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.respTabs_list.' + options.tabidentify + ' li').addClass('respTab_item').addClass(options.tabidentify);
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                if (options.type == 'vertical')
                    $respTabsList.css('margin-top', '3px');

                $respTabs.find('.respTabs_container.' + options.tabidentify).css('border-color', options.active_content_border_color);
                $respTabs.find('.respTabs_container.' + options.tabidentify + ' > div').addClass('respTab_content').addClass(options.tabidentify);
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('respTabs_accordion').addClass(options.tabidentify);
                        $respTabs.find('.respTabs_list').css('display', 'none');
                    }
                }


                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.respTab_content.' + options.tabidentify).before("<h2 class='resp_accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");

                $respTabs.find('.respTab_content.' + options.tabidentify).prev("h2").css({
                    'background-color': options.inactive_bg,
                    'border-color': options.active_border_color
                });

                var itemCount = 0;
                $respTabs.find('.resp_accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.respTab_item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp_accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.respTab_item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + (count));
                    $tabItem.attr('role', 'tab');
                    $tabItem.css({
                        'background-color': options.inactive_bg,
                        'border-color': 'none'
                    });

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.respTab_content.' + options.tabidentify).each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + (tabcount)).css({
                            'border-color': options.active_border_color
                        });
                        tabcount++;
                    });
                    count++;
                });

                // Show correct content area
                var tabNum = 0;
                if (hash != '') {
                    var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                    if (matches !== null && matches.length === 2) {
                        tabNum = parseInt(matches[1], 10) - 1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.respTab_item.' + options.tabidentify)[tabNum]).addClass('respTab_active').css({
                    'background-color': options.activetab_bg,
                    'border-color': options.active_border_color
                });

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp_accordion.' + options.tabidentify)[tabNum]).addClass('respTab_active').css({
                        'background-color': options.activetab_bg + ' !important',
                        'border-color': options.active_border_color,
                        // 'background': 'none'
                    });


                    $($respTabs.find('.respTab_content.' + options.tabidentify)[tabNum]).addClass('respTab_content_active').addClass(options.tabidentify).attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                    // $($respTabs.find('.respTab_content.' + options.tabidentify)[tabNum]).addClass('resp_accordion-closed'); //removed respTab_content_active
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {

                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp_accordion') && $currentTab.hasClass('respTab_active')) {
                            $respTabs.find('.respTab_content_active.' + options.tabidentify).slideUp('', function () {
                                $(this).addClass('resp_accordion-closed');
                            });
                            $currentTab.removeClass('respTab_active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            return false;
                        }
                        if (!$currentTab.hasClass('respTab_active') && $currentTab.hasClass('resp_accordion')) {
                            $respTabs.find('.respTab_active.' + options.tabidentify).removeClass('respTab_active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            $respTabs.find('.respTab_content_active.' + options.tabidentify).slideUp().removeClass('respTab_content_active resp_accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('respTab_active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.respTab_content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('respTab_content_active');
                        } else {
                            // console.log('here');
                            $respTabs.find('.respTab_active.' + options.tabidentify).removeClass('respTab_active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });


                            $respTabs.find('.respTab_content_active.' + options.tabidentify).removeAttr('style').removeClass('respTab_content_active').removeClass('resp_accordion-closed');


                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('respTab_active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });


                            $respTabs.find('.respTab_content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('respTab_content_active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);

                        //Update Browser History
                        if (historyApi) {
                            var currentHash = window.location.hash;
                            var tabAriaParts = $tabAria.split('tab_item-');
                            // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                            var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();
                            if (currentHash != "") {
                                var re = new RegExp(respTabsId + "[0-9]+");
                                if (currentHash.match(re) != null) {
                                    newHash = currentHash.replace(re, newHash);
                                }
                                else {
                                    newHash = currentHash + "|" + newHash;
                                }
                            }
                            else {
                                newHash = '#' + newHash;
                            }

                            history.replaceState(null, null, newHash);
                        }
                    });

                });

                //Window resize function                   
                $(window).resize(function () {
                    $respTabs.find('.resp_accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);

