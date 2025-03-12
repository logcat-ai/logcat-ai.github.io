import { Modal } from "react-responsive-modal";

interface PrivacyPolicyModalProps {
    open: boolean;
    onCloseModal: () => void;
}

const PrivacyPolicyModal = ({
    open,
    onCloseModal,
}: PrivacyPolicyModalProps) => {
    return (
        <Modal open={open} onClose={onCloseModal} center showCloseIcon={false}>
            <div className="privacy-policy">
                <div
                    style={{ marginBottom: "1rem" }}
                    className="privacy-policy-header"
                >
                    <h2>Privacy Policy</h2>
                    <h3 style={{ fontWeight: "400" }}>
                        Last updated: March 8, 2025
                    </h3>
                </div>
                <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
                    <div className="privacy-policy-section">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                1. Introduction
                            </h3>
                            <p className="text-sm">
                                Welcome to logcat.ai ("we," "our," or "us"), a
                                service operated by LOGE Inc. This Privacy
                                Policy explains how we collect, use, disclose,
                                and safeguard your information when you use our
                                web-based Android logcat parser and analytics
                                platform.
                            </p>
                            <p className="text-sm">
                                We respect your privacy and are committed to
                                protecting your personal information. Please
                                read this Privacy Policy carefully. By accessing
                                or using logcat.ai, you acknowledge that you
                                have read, understood, and agree to be bound by
                                the terms of this Privacy Policy.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                2. Information We Collect
                            </h3>
                            <h4 className="text-md font-medium">
                                2.1 Log Data
                            </h4>
                            <p className="text-sm">
                                Our primary function is to analyze Android
                                logcat files that you voluntarily upload to our
                                platform. These files may contain:
                            </p>
                            <ul className="list-disc pl-5 text-sm">
                                <li>System diagnostic information</li>
                                <li>Application error messages</li>
                                <li>
                                    Device information (device model, Android
                                    version)
                                </li>
                                <li>
                                    Any other information contained in the
                                    logcat files you upload
                                </li>
                            </ul>

                            <h4 className="text-md font-medium">
                                2.2 Information That May Be Present in Logs
                            </h4>
                            <p className="text-sm">
                                We do not intentionally collect personal
                                information beyond what may already be present
                                in your uploaded logcat files. Please note that
                                logcat files may sometimes contain:
                            </p>
                            <ul className="list-disc pl-5 text-sm">
                                <li>User identifiers</li>
                                <li>IP addresses</li>
                                <li>Location data</li>
                                <li>Activity timestamps</li>
                                <li>
                                    Other potentially identifying information
                                </li>
                            </ul>
                            <p className="text-sm">
                                We recommend that you review and, if necessary,
                                redact or remove sensitive information from
                                logcat files before uploading them to our
                                service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                3. How We Use Your Information
                            </h3>
                            <p className="text-sm">
                                We use the information we collect for the
                                following purposes:
                            </p>
                            <ul className="list-disc pl-5 text-sm">
                                <li>To analyze and parse your logcat files</li>
                                <li>
                                    To provide insights and analytics about the
                                    uploaded logs
                                </li>
                                <li>
                                    To improve our services and user experience
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                4. Sharing Your Information
                            </h3>
                            <h4 className="text-md font-medium">
                                4.1 Service Providers
                            </h4>
                            <p className="text-sm">
                                We use third-party artificial intelligence and
                                machine learning services to process and analyze
                                your uploaded logcat files. Your log data will
                                be shared with these service providers solely
                                for the purpose of analysis. Any third-party
                                processing is conducted under appropriate data
                                protection agreements.
                            </p>

                            <h4 className="text-md font-medium">
                                4.2 Other Disclosures
                            </h4>
                            <p className="text-sm">
                                We will not sell, rent, or share your
                                information with third parties except as
                                described in this Privacy Policy. We may
                                disclose your information if required to do so
                                by law or in response to valid requests by
                                public authorities.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                5. Data Retention
                            </h3>
                            <p className="text-sm">
                                We retain your uploaded logcat files and
                                analysis results for 90 days after upload. After
                                this period, the data will be permanently
                                deleted from our active systems. Backup copies
                                may remain for up to an additional 30 days
                                before being permanently deleted.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                6. Data Security
                            </h3>
                            <p className="text-sm">
                                We implement appropriate technical and
                                organizational measures to protect your data,
                                including:
                            </p>
                            <ul className="list-disc pl-5 text-sm">
                                <li>
                                    Encryption of data in transit using HTTPS
                                </li>
                                <li>Encryption of data at rest</li>
                                <li>
                                    Access controls and authentication
                                    mechanisms
                                </li>
                                <li>
                                    Regular security assessments and reviews
                                </li>
                            </ul>
                            <p className="text-sm">
                                We implement robust security measures to protect
                                your data, including encryption, access
                                controls, and regular security reviews. We are
                                committed to maintaining the highest standards
                                of data protection in line with industry best
                                practices.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                7. Your Rights and Choices
                            </h3>
                            <h4 className="text-md font-medium">
                                7.1 Account Deletion
                            </h4>
                            <p className="text-sm">
                                You may request deletion of your account and
                                associated data by contacting us at
                                legal@logcat.ai. Upon receiving your request, we
                                will delete your data from our active systems
                                within 30 days.
                            </p>

                            <h4 className="text-md font-medium">
                                7.2 Data Access and Correction
                            </h4>
                            <p className="text-sm">
                                You may request access to the data we have
                                collected about you or request corrections to
                                inaccurate data by contacting us at
                                legal@logcat.ai.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                8. Cookies and Tracking Technologies
                            </h3>
                            <p className="text-sm">
                                Our website does not use cookies or similar
                                tracking technologies.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                9. Geographic Limitations
                            </h3>
                            <h4 className="text-md font-medium">
                                9.1 European Union Residents
                            </h4>
                            <p className="text-sm">
                                During our beta phase, our services are not
                                intended for residents of the European Union as
                                we are currently working toward GDPR compliance.
                                By using our service, you confirm that you are
                                not accessing it from within the EU. We expect
                                to support EU users in the future once we have
                                implemented all necessary GDPR requirements.
                            </p>
                            <p className="text-sm">
                                When you create an account, you will be asked to
                                confirm that you are not located in the EU. If
                                your status changes and you begin accessing our
                                services from the EU, you are required to
                                discontinue use until we announce GDPR
                                compliance.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                10. Children's Privacy
                            </h3>
                            <p className="text-sm">
                                Our services are not directed to individuals
                                under the age of 13. We do not knowingly collect
                                personal information from children under 13. If
                                you become aware that a child has provided us
                                with personal information, please contact us at
                                legal@logcat.ai
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                11. Changes to This Privacy Policy
                            </h3>
                            <p className="text-sm">
                                We may update our Privacy Policy from time to
                                time. We will notify you of any changes by
                                posting the new Privacy Policy on this page and
                                updating the "Last Updated" date. You are
                                advised to review this Privacy Policy
                                periodically for any changes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                12. Contact Us
                            </h3>
                            <p className="text-sm">
                                If you have any questions about this Privacy
                                Policy, please contact us at:
                            </p>
                            <p className="text-sm">
                                <a
                                    href="mailto:legal@logcat.ai"
                                    className="text-blue-500 hover:underline"
                                >
                                    legal@logcat.ai
                                </a>
                                <br />
                                LOGE Inc.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="privacy-policy-footer">
                    <span onClick={onCloseModal}>Close</span>
                </div>
            </div>
        </Modal>
    );
};

export default PrivacyPolicyModal;
