import { IDisposable } from "@web-atoms/core/dist/core/types";
import DISingleton from "@web-atoms/core/dist/di/DISingleton";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import Action from "@web-atoms/core/dist/view-model/Action";

@DISingleton({ globalVar: "bridge.demoService"})
class TimerService {

    public createTimer(ms: number, action: (n: number) => void): IDisposable {
        // this is dummy code... will not be executed...
        return null;
    }

}

export default class TimerViewModel extends AtomViewModel {

    public model: number;

    public registration: IDisposable = null;

    @Inject
    private timerService: TimerService;

    @Action()
    public start() {
        const r = this.timerService.createTimer(1000, (n) => {
            this.model = n;
        });

        // this statement will dispose last registration
        // when we leave view model...
        this.registration = this.registerDisposable(r);
    }

    @Action()
    public stop() {
        this.registration.dispose();
        this.registration = null;
    }

}
