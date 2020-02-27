using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
using WebAtoms;
using WebAtomsDemo.Services;
using Xamarin.Essentials;
using Xamarin.Forms;

[assembly: Dependency(typeof(WebAtomsDemo.UrlService))]

namespace WebAtomsDemo
{
    public class AppBridge : AtomBridge
    {

        static AppBridge() {

            RegisterService("urlService", DependencyService.Get<UrlService>());
            RegisterService("demoService", DependencyService.Get<DemoService>());

        }

    }

    public class UrlService: IJSService
    {
        public void Open(string url)
        {
            AtomDevice.Instance.BeginInvokeOnMainThread(async () => { 
                await Browser.OpenAsync(url);
            });
        }
    }
}
