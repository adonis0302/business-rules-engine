///<reference path='../typings/underscore/underscore.d.ts'/>
///<reference path='../validation/rules.ts'/>

/**
 * Created by rsamec on 9.7.2014.
 */
module Validation {

    /*
     * Translated default messages for the validation engine.
     * Locale: CS (Czech; čeština, český jazyk)
     */
    _.extend(ValidationService.ValidationMessages, {
        required: "Tento údaj je povinný.",
        remote: "Prosím, opravte tento údaj.",
        email: "Prosím, zadejte platný e-mail.",
        url: "Prosím, zadejte platné URL.",
        date: "Prosím, zadejte platné datum.",
        dateISO: "Prosím, zadejte platné datum (ISO).",
        number: "Prosím, zadejte číslo.",
        digits: "Prosím, zadávejte pouze číslice.",
        creditcard: "Prosím, zadejte číslo kreditní karty.",
        equalTo: "Prosím, zadejte znovu stejnou hodnotu.",
        extension: "Prosím, zadejte soubor se správnou příponou.",
        maxlength: "Prosím, zadejte nejvíce {MaxLength} znaků.",
        minlength: "Prosím, zadejte nejméně {MinLength} znaků.",
        rangelength: "Prosím, zadejte od {MinLength} do {MaxLength} znaků.",
        range: "Prosím, zadejte hodnotu od {Min} do {Max}.",
        max: "Prosím, zadejte hodnotu menší nebo rovnu {Max}.",
        min: "Prosím, zadejte hodnotu větší nebo rovnu {Min}."
    });
}
