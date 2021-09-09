using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace WebAtomsDemo.UWP
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage
    {
        public MainPage()
        {
            this.InitializeComponent();


            //List<Assembly> assembliesToInclude = new List<Assembly>();

            //// Now, add in all the assemblies your app uses
            //assembliesToInclude.Add(typeof(JSContext).GetTypeInfo().Assembly);

            Xamarin.Forms.DependencyService.Register<WebAtoms.XF.JSContextFactory>();
            Xamarin.Forms.DependencyService.Register<WebAtoms.XF.Services.DefaultWebClient>();

            LoadApplication(new WebAtomsDemo.App());
        }
    }
}
