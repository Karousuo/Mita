$.ajaxPrefilter(function(options, originalOptions, jqXHR) { options.async = true; });
$("#navbar").load('./navigation.html');