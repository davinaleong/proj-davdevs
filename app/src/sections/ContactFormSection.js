import React from 'react';

function ContactFormSection(props) {
    return (
        <section classsName="contact text-center mb-3">
            <h2 className="hidden">Lord Christ Jesus, can you shoo away all those head-hunters, please?!</h2>

            <form method="post" action="https://formspree.io/davina.leong@outlook.com">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input name="name" placeholder="Name *" required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="email" placeholder="Email *" required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select name="type" placeholder="Subject *" required>
                                    <option value="">-- Subjects --</option>
                                    <option value="Project">Need a project?</option>
                                    <option value="Hangout">Meet up for coffee or tea?</option>
                                    <option value="Job">Hire me.</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea name="Message" rows="6" required></textarea>
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