using System;
using System.Collections.Generic;
using System.Text;
using WebAtoms;
using WebAtomsDemo.Services;
using Xamarin.Forms;
[assembly: Dependency(typeof(DemoService))]
namespace WebAtomsDemo.Services
{
    class TimerRegistration {

        public bool Disposed { get; set; }

        public int Value { get; set; }

    }

    public class DemoService: IJSService
    {

        public IJSValue CreateTimer(IJSContext context, int milliSeconds, IJSValue action)
        {
            var r = new TimerRegistration {};
            Device.StartTimer(TimeSpan.FromMilliseconds(milliSeconds), () => {
                action.InvokeFunction(null, context.CreateNumber(r.Value));
                r.Value++;
                return !r.Disposed;
            });

            // this will be disposed inside JavaScript
            return context.CreateDisposableAction(() => {
                r.Disposed = true;
            });
        }

    }
}
