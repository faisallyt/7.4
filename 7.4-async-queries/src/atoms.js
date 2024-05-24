import {atom, selector} from "recoil";
import axios from "axios";


// asyncronous  data queries 
export const notificationsAtom=atom({
    key:"networking",
    default: selector({
        key:"networkAtomSelector",
        get:async()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
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