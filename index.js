function lcm(number1, number2) {
    let Lcm = 0;
    let divider1;
    let divider2;
    do {
        Lcm++;
        divider1 = Lcm % number1;
        divider2 = Lcm % number2;
    } while (divider1 != 0 || divider2 != 0);
    alert(Lcm);
    return Lcm;
}
lcm(4,6);