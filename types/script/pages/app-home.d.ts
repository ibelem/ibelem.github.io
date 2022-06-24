import { LitElement } from 'lit';
import '@pwabuilder/pwainstall';
export declare class AppHome extends LitElement {
    description: string;
    jsondata: {
        name: string;
        t2022: {
            id: number;
            time: string;
            tag: string;
            title: string;
            des: string;
            speaker: string;
            pos: string;
            com: string;
            iconid: string;
            icon: string;
            icon5: string;
            bio: string;
            pdf: string;
            bilibili: string;
            aid: string;
            cid: string;
            youtube: string;
        }[];
        t2021: {
            id: number;
            tag: string;
            title: string;
            des: string;
            speaker: string;
            pos: string;
            com: string;
            icon: string;
            icon5: string;
            bio: string;
            pdf: string;
            bilibili: string;
            aid: string;
            cid: string;
            youtube: string;
        }[];
    };
    canvas: HTMLCanvasElement;
    _herovideo: HTMLVideoElement;
    _manualplay: HTMLButtonElement;
    _manualpause: HTMLButtonElement;
    playpromise: string;
    private _playHeroVideo;
    private _pauseHeroVideo;
    private _checkVideoAutoPlay;
    private _showCanvas;
    connectedCallback(): Promise<void>;
    fetchData(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
