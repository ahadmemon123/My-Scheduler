import { forwardRef } from "react";
import SchedulerComponent from "./SchedulerComponent";
import StoreProvider from "./store/provider";


const Scheduler = forwardRef(function Scheduler(props, ref) {
    return (
        <StoreProvider initial={props}>
            <SchedulerComponent />
        </StoreProvider>
    );
});

export { Scheduler };
