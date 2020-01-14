import React from 'react';

import InputField from './../fields/InputField';
import SelectField from './../fields/SelectField';
import TextareaField from './../fields/TextareaField';

function ContactFormSection(props) {
    return (
        <section classsName="contact text-center mb-3">
            <h2 className="hidden">Lord Christ Jesus, can you shoo away all those head-hunters, please?!</h2>

            <form method="post" action="https://formspree.io/davina.leong@outlook.com">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <InputField name="name" placeholder="Name *" required={true} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputField name="name" placeholder="Email *" required={true} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SelectField name="type" placeholder="Subject *" required={true} group={props.site.subjects.group} options={props.site.subjects.options} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TextareaField name="Message" rows="6" required={true} />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="text-right">
                            <td><button className="bg-orange" type="submit"><i className="fal fa-paper-plane"></i> Send</button></td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </section>
    );
}

export default ContactFormSection;