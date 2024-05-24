import {atom, selector} from "recoil";

export const notificationsAtom=atom({
    key:"networking",
    default:{
        network:6,
        jobs:4,
        messaging:6,
        notifications:12
    }
});

export const totalNotificationAtomSelector=selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const notificationsState=get(notificationsAtom);
        const networking=notificationsState.network;
        const jobs=notificationsState.jobs;
        const notifications=notificationsState.notifications;
        const messaging=notificationsState.messaging;

        return networking+jobs+notifications+messaging
    }
})