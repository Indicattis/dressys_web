import MessageDTO from "../types/message";


const Messages: MessageDTO[] = [
    {
        id: 1,
        message_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius officiis maiores eos voluptatibus, esse distinctio nisi nostrum dolore reprehenderit obcaecati odit iste saepe blanditiis culpa illum voluptates, accusantium quos molestiae.",
        message_opened: true,
        message_data: "25min",
        message_type: "Info"
    },
    {
        id: 2,
        message_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius officiis maiores eos voluptatibus, esse distinctio nisi nostrum dolore reprehenderit obcaecati odit iste saepe blanditiis culpa illum voluptates, accusantium quos molestiae.",
        message_opened: false,
        message_data: "3 dias",
        message_type: "Alert"
    },
    {
        id: 3,
        message_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius officiis maiores eos voluptatibus, esse distinctio nisi nostrum dolore reprehenderit obcaecati odit iste saepe blanditiis culpa illum voluptates, accusantium quos molestiae.",
        message_opened: true,
        message_data: "1 mês",
        message_type: "Info"
    },
    {
        id: 4,
        message_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius officiis maiores eos voluptatibus, esse distinctio nisi nostrum dolore reprehenderit obcaecati odit iste saepe blanditiis culpa illum voluptates, accusantium quos molestiae.",
        message_opened: false,
        message_data: "mais de 1 ano",
        message_type: "Warning"
    }
]

export default Messages;