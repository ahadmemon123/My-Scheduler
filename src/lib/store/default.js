

const defaultMonth = {
    weekDays: [0, 1, 2, 3, 4, 5, 6],
    weekStartOn: 1,
    startHour: 9,
    endHour: 17,
    navigation: true,
    disableGoToDay: false,
};

const defaultWeek = {
    weekDays: [0, 1, 2, 3, 4, 5, 6],
    weekStartOn: 0,
    startHour: 9,
    endHour: 17,
    step: 60,
    navigation: true,
    disableGoToDay: false,
};

const defaultDay = {
    startHour: 1,
    endHour: 24,
    step: 60,
    navigation: true,
};

const defaultResourceFields = {
    idField: "assignee",
    textField: "text",
    subTextField: "subtext",
    avatarField: "avatar",
    colorField: "color",
};

const defaultViews = (props) => {
    const { month, week, day } = props;
    return {
        month: month !== null ? Object.assign(defaultMonth, month) : null,
        week: week !== null ? Object.assign(defaultWeek, week) : null,
        day: day !== null ? Object.assign(defaultDay, day) : null,
    };
};

export const defaultProps = (props) => {
    const { month, week, day, resourceFields, view, ...otherProps } = props;
    const views = defaultViews(props);
    const defaultView = view || "day";
    const initialView = views[defaultView] ? defaultView : "day";
    return {
        ...views,
        resourceFields: Object.assign(defaultResourceFields, resourceFields),
        view: initialView,
        ...Object.assign(
            {
                height: 600,
                navigation: true,
                selectedDate: new Date(),
                disableViewNavigator: false,
                events: [],
                fields: [],
                loading: undefined,
                customEditor: undefined,
                onConfirm: () => { },
                onEventUpdate: () => { },
                onUnAssignedEventCreate: () => { },
                onEventDrop: () => { },
                onEventDragOver: () => { },
                onDelete: undefined,
                viewerExtraComponent: undefined,
                resources: [],
                resourceHeaderComponent: undefined,
                resourceViewMode: "default",
                direction: "ltr",
                dialogMaxWidth: "md",
                deletable: true,
                editable: true,
                hourFormat: "12",
                draggable: true,
            },
            otherProps
        ),
    };
};

export const initialStore = {
    ...defaultProps({}),
    setProps: () => { },
    dialog: false,
    selectedRange: undefined,
    selectedEvent: undefined,
    selectedResource: undefined,
    handleState: () => { },
    getViews: () => { },
    triggerDialog: () => { },
    triggerLoading: () => { },
    handleGotoDay: () => { },
    confirmEvent: () => { },
    onDrop: () => { },
    onEventUpdate: () => { },
};
