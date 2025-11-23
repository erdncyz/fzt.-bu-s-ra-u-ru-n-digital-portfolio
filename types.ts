export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: number;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export enum ViewState {
    HOME = 'HOME',
    ADVISOR = 'ADVISOR',
    CONTACT = 'CONTACT'
}