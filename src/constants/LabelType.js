const LabelType = {
    Copywriting: 'task__tag--copyright',
    Design: 'task__tag--design',
    Illustration: 'task__tag--illustration',

    getName: (name) => {
        switch (name) {
            case LabelType.Copywriting:
                return 'Copywriting';
            case LabelType.Design:
                return 'UI Design';
            case LabelType.Illustration:
                return 'Illustration';
            default:
                break;
        }
    }
};

export default LabelType;