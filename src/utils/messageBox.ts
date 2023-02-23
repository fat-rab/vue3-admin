import {MessageBoxData} from 'element-plus/es/components/message-box/src/message-box.type'

type MessageType = '' | 'success' | 'warning' | 'info' | 'error'

export function showDeleteMessageBox(message: string): Promise<MessageBoxData> {
    return confirmMessageBox('warning', message)
}


export function confirmMessageBox(type: MessageType, message: string): Promise<MessageBoxData> {
    return ElMessageBox.confirm(
        message,
        '提示！',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type,
        }
    )
}
