import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";
import RegisterPanelStyle from "./styles/RegisterPanel.module.css";

const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nama_group: "",
        password_group: "",
        password_group_confirmation: "",
        is_binusian: "",
        nama_leader: "",
        email_leader: "",
        nomor_wa_leader: "",
        id_line_leader: "",
        github_leader: "",
        tmp_lahir_leader: "",
        tgl_lahir_leader: "",
        cv: null,
        flazz_card: null,
        id_card: null,
    });
    const [errors, setErrors] = useState({});
    const { login } = useAuth();
    const navigate = useNavigate();

    const validateFileType = (file) => {
        const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
        return file && allowedTypes.includes(file.type);
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.nama_group) newErrors.nama_group = "Nama tim tidak boleh kosong.";
        if (!formData.password_group) {
            newErrors.password_group = "Password tidak boleh kosong.";
        } else {
            if (formData.password_group.length < 8) newErrors.password_group = "Password harus minimal 8 karakter.";
            if (!/[A-Z]/.test(formData.password_group)) newErrors.password_group = "Password harus memiliki huruf besar.";
            if (!/[a-z]/.test(formData.password_group)) newErrors.password_group = "Password harus memiliki huruf kecil.";
            if (!/[0-9]/.test(formData.password_group)) newErrors.password_group = "Password harus memiliki angka.";
            if (!/[!@#$%^&*]/.test(formData.password_group)) newErrors.password_group = "Password harus memiliki simbol.";
        }
        if (formData.password_group_confirmation !== formData.password_group) newErrors.password_group_confirmation = "Konfirmasi password tidak cocok.";
        if (!formData.is_binusian) newErrors.is_binusian = "Pilih status Binusian atau Non Binusian.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.nama_leader) newErrors.nama_leader = "Nama lengkap tidak boleh kosong.";
        if (!formData.email_leader || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_leader)) newErrors.email_leader = "Masukkan email yang valid.";
        if (!formData.nomor_wa_leader || formData.nomor_wa_leader.length < 9) newErrors.nomor_wa_leader = "Nomor WhatsApp minimal 9 digit.";
        if (!formData.id_line_leader) newErrors.id_line_leader = "LINE ID tidak boleh kosong.";
        if (!formData.github_leader) newErrors.github_leader = "GitHub/GitLab ID tidak boleh kosong.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors = {};
        if (!formData.tmp_lahir_leader) newErrors.tmp_lahir_leader = "Tempat lahir tidak boleh kosong.";
        if (!formData.tgl_lahir_leader) newErrors.tgl_lahir_leader = "Tanggal lahir tidak boleh kosong.";
        if (!formData.cv) newErrors.cv = "Unggah file CV Anda.";
        if (formData.cv && !validateFileType(formData.cv)) newErrors.cv = "File CV harus berupa PDF, JPG, JPEG, atau PNG.";

        if (formData.is_binusian === "binusian") {
            if (!formData.flazz_card) newErrors.flazz_card = "Unggah kartu Flazz Anda.";
            if (formData.flazz_card && !validateFileType(formData.flazz_card)) newErrors.flazz_card = "File Flazz Card harus berupa PDF, JPG, JPEG, atau PNG.";
        } else if (formData.is_binusian === "non-binusian") {
            if (!formData.id_card) newErrors.id_card = "Unggah kartu identitas Anda.";
            if (formData.id_card && !validateFileType(formData.id_card)) newErrors.id_card = "File ID Card harus berupa PDF, JPG, JPEG, atau PNG.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (step === 1 && validateStep1()) setStep(2);
        if (step === 2 && validateStep2()) setStep(3);
    };

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        if (validateStep3()) {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                if (key === "flazz_card" && formData.is_binusian !== "binusian") return;
                if (key === "id_card" && formData.is_binusian !== "non-binusian") return;

                if (key === "is_binusian") {
                    formDataToSend.append(key, formData[key] === "binusian" ? "binusian" : "non_binusian");
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            });

            try {
                const response = await axios.post("http://127.0.0.1:8000/api/register", formDataToSend, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                console.log("Registration successful:", response.data);
                alert("Registration successful!");

                if (response.data.token) {
                    login(response.data.token);
                }

                navigate("/login");
            } catch (error) {
                console.error("Error during registration:", error.response?.data || error.message);
                if (error.response?.data?.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    alert("Registration failed. Please try again.");
                }
            }
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newData = { ...formData, [name]: files ? files[0] : value };
        setFormData(newData);
    };

    return (
        <div className={RegisterPanelStyle.registerContainer}>
            <h2 className={RegisterPanelStyle.heading1}>REGISTER</h2>
            <div className={RegisterPanelStyle.form1}>
                {step === 1 && (
                    <>
                        <label htmlFor="nama_group">Team Name</label>
                        <input type="text" name="nama_group" placeholder="Team Name" onChange={handleChange} value={formData.nama_group} />
                        {errors.nama_group && <p className={RegisterPanelStyle.error}>{errors.nama_group}</p>}

                        <label htmlFor="password_group">Password</label>
                        <input type="password" name="password_group" placeholder="Password" onChange={handleChange} value={formData.password_group} />
                        {errors.password_group && <p className={RegisterPanelStyle.error}>{errors.password_group}</p>}

                        <label htmlFor="password_group_confirmation">Confirm Password</label>
                        <input type="password" name="password_group_confirmation" placeholder="Confirm Password" onChange={handleChange} value={formData.password_group_confirmation} />
                        {errors.password_group_confirmation && <p className={RegisterPanelStyle.error}>{errors.password_group_confirmation}</p>}

                        <label htmlFor="is_binusian">Status</label>
                        <select name="is_binusian" onChange={handleChange} value={formData.is_binusian}>
                            <option value="">Pick a Value</option>
                            <option value="binusian">Binusian</option>
                            <option value="non-binusian">Non-Binusian</option>
                        </select>
                        {errors.is_binusian && <p className={RegisterPanelStyle.error}>{errors.is_binusian}</p>}

                        <div className={RegisterPanelStyle.buttonContainer}>
                            <button type="button" className={RegisterPanelStyle.loginButton} onClick={() => navigate("/login")}>
                                Back to Login
                            </button>
                            <button type="button" className={RegisterPanelStyle.signinButton} onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <label htmlFor="nama_leader">Full Name</label>
                        <input type="text" name="nama_leader" placeholder="Full Name" onChange={handleChange} value={formData.nama_leader} />
                        {errors.nama_leader && <p className={RegisterPanelStyle.error}>{errors.nama_leader}</p>}

                        <label htmlFor="email_leader">Email</label>
                        <input type="email" name="email_leader" placeholder="Email" onChange={handleChange} value={formData.email_leader} />
                        {errors.email_leader && <p className={RegisterPanelStyle.error}>{errors.email_leader}</p>}

                        <label htmlFor="nomor_wa_leader">WhatsApp Number</label>
                        <input type="text" name="nomor_wa_leader" placeholder="WhatsApp Number" onChange={handleChange} value={formData.nomor_wa_leader} />
                        {errors.nomor_wa_leader && <p className={RegisterPanelStyle.error}>{errors.nomor_wa_leader}</p>}

                        <label htmlFor="id_line_leader">LINE ID</label>
                        <input type="text" name="id_line_leader" placeholder="LINE ID" onChange={handleChange} value={formData.id_line_leader} />
                        {errors.id_line_leader && <p className={RegisterPanelStyle.error}>{errors.id_line_leader}</p>}

                        <label htmlFor="github_leader">GitHub/GitLab ID</label>
                        <input type="text" name="github_leader" placeholder="GitHub/GitLab ID" onChange={handleChange} value={formData.github_leader} />
                        {errors.github_leader && <p className={RegisterPanelStyle.error}>{errors.github_leader}</p>}

                        <div className={RegisterPanelStyle.buttonContainer}>
                            <button type="button" className={RegisterPanelStyle.registerButton} onClick={handlePrevious}>
                                Back
                            </button>
                            <button type="button" className={RegisterPanelStyle.signinButton} onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </>
                )}
                {step === 3 && (
                    <>
                        <label htmlFor="tmp_lahir_leader">Birth Place</label>
                        <input type="text" name="tmp_lahir_leader" placeholder="Birth Place" onChange={handleChange} value={formData.tmp_lahir_leader} />
                        {errors.tmp_lahir_leader && <p className={RegisterPanelStyle.error}>{errors.tmp_lahir_leader}</p>}

                        <label htmlFor="tgl_lahir_leader">Birth Date</label>
                        <input type="date" name="tgl_lahir_leader" onChange={handleChange} value={formData.tgl_lahir_leader} />
                        {errors.tgl_lahir_leader && <p className={RegisterPanelStyle.error}>{errors.tgl_lahir_leader}</p>}

                        <label htmlFor="cv">Upload CV</label>
                        <input type="file" name="cv" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" />
                        {errors.cv && <p className={RegisterPanelStyle.error}>{errors.cv}</p>}

                        {formData.is_binusian === "binusian" && (
                            <>
                                <label htmlFor="flazz_card">Upload Flazz Card</label>
                                <input type="file" name="flazz_card" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" />
                                {errors.flazz_card && <p className={RegisterPanelStyle.error}>{errors.flazz_card}</p>}
                            </>
                        )}

                        {formData.is_binusian === "non-binusian" && (
                            <>
                                <label htmlFor="id_card">Upload ID Card</label>
                                <input type="file" name="id_card" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" />
                                {errors.id_card && <p className={RegisterPanelStyle.error}>{errors.id_card}</p>}
                            </>
                        )}

                        <div className={RegisterPanelStyle.buttonContainer}>
                            <button type="button" className={RegisterPanelStyle.registerButton} onClick={handlePrevious}>
                                Back
                            </button>
                            <button type="button" className={RegisterPanelStyle.signinButton} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Register;