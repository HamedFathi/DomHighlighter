interface Setting {
    jqSelector?: string;
    elementPosition?: string;
    showDialog?: boolean;
    dialogHtml?: string;
    marginColor?: string;
    paddingColor?: string;
    borderColor?: string;
    elementColor?: string;
    dialogColor?: string;
    dialogBorderColor?: string;
    showTagName?: boolean;
    showId?: boolean;
    showClasses?: boolean;
    filterClasses?: string[];
}
interface ElementInfo {
    margin: string;
    padding: string;
    border: string;
    tagName: string;
    tagId: string;
    tagClasses: string[];
}
declare class DomHighlighter {
    start(domHighlighterSetting?: Setting, callback?: (data: ElementInfo) => any): void;
    stop(): void;
}
