import dayjs from "dayjs";

export const Greeting = () => {
    const hour = dayjs().hour();

    if (hour >= 5 && hour < 12) {
        return 'Bom dia,';
    } else if (hour >= 12 && hour < 18) {
        return 'Boa tarde,';
    } else {
        return 'Boa noite,';
    }
}
