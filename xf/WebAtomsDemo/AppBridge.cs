using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
using WebAtoms;
using WebAtoms.Sqlite;
using WebAtomsDemo.Services;
using Xamarin.Essentials;
using Xamarin.Forms;

[assembly: Dependency(typeof(WebAtomsDemo.UrlService))]

[assembly: Dependency(typeof(WebAtoms.Sqlite.DatabaseService))]

namespace WebAtomsDemo
{
    public class AppBridge : AtomBridge
    {

        public UrlService UrlService => DependencyService.Get<UrlService>();

        public DemoService DemoService => DependencyService.Get<DemoService>();

        /// <summary>
        ///  This enables `bridge.database` sqlite
        /// </summary>
        public DatabaseService Database => DependencyService.Get<DatabaseService>();

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
