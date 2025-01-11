import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterPanelStyle from "./styles/RegisterPanel.module.css";

const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        teamName: "",
        password: "",
        confirmPassword: "",
        status: "",
        fullName: "",
        email: "",
        whatsapp: "",
        lineId: "",
        githubId: "",
        birthPlace: "",
        birthDate: "",
        cvFile: null,
        idCardFile: null,
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.removeItem("formData");
        setFormData({
            teamName: "",
            password: "",
            confirmPassword: "",
            status: "",
            fullName: "",
            email: "",
            whatsapp: "",
            lineId: "",
            githubId: "",
            birthPlace: "",
            birthDate: "",
            cvFile: null,
            idCardFile: null,
        });
        setErrors({});
    }, []); 

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.teamName) newErrors.teamName = "Nama tim tidak boleh kosong.";
        if (!formData.password) {
            newErrors.password = "Password tidak boleh kosong.";
        } else {
            if (formData.password.length < 8) newErrors.password = "Password harus minimal 8 karakter.";
            if (!/[A-Z]/.test(formData.password)) newErrors.password = "Password harus memiliki huruf besar.";
            if (!/[a-z]/.test(formData.password)) newErrors.password = "Password harus memiliki huruf kecil.";
            if (!/[0-9]/.test(formData.password)) newErrors.password = "Password harus memiliki angka.";
            if (!/[!@#$%^&*]/.test(formData.password)) newErrors.password = "Password harus memiliki simbol.";
        }
        if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "Konfirmasi password tidak cocok.";
        if (!formData.status) newErrors.status = "Pilih status Binusian atau Non Binusian.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Nama lengkap tidak boleh kosong.";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Masukkan email yang valid.";
        if (!formData.whatsapp || formData.whatsapp.length < 9) newErrors.whatsapp = "Nomor WhatsApp minimal 9 digit.";
        if (!formData.lineId) newErrors.lineId = "LINE ID tidak boleh kosong.";
        if (!formData.githubId) newErrors.githubId = "GitHub/GitLab ID tidak boleh kosong.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors = {};
        if (!formData.birthPlace) newErrors.birthPlace = "Tempat lahir tidak boleh kosong.";
        if (!formData.birthDate) newErrors.birthDate = "Tanggal lahir tidak boleh kosong.";
        if (!formData.cvFile) newErrors.cvFile = "Unggah file CV Anda.";
        if (formData.status === "Binusian" && !formData.idCardFile) newErrors.idCardFile = "Unggah kartu Flazz Anda.";
        if (formData.status === "Non Binusian" && !formData.idCardFile) newErrors.idCardFile = "Unggah kartu identitas Anda.";
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
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });

            try {
                const response = await axios.post("http://your-backend-url.com/register", formDataToSend, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log("Registration successful:", response.data);
                alert("Registration successful!");
                localStorage.removeItem("formData"); // Hapus data setelah registrasi berhasil
            } catch (error) {
                console.error("Error during registration:", error.response?.data || error.message);
                alert("Registration failed. Please try again.");
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
            {step === 1 && (
                <div>
                    <h2 className={RegisterPanelStyle.heading1}>REGISTER</h2>
                    <form className={RegisterPanelStyle.form1}>
                        <label htmlFor="teamName">Team Name</label>
                        <input type="text" name="teamName" placeholder="Team Name" onChange={handleChange} value={formData.teamName} />
                        {errors.teamName && <p className={RegisterPanelStyle.error}>{errors.teamName}</p>}

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                        {errors.password && <p className={RegisterPanelStyle.error}>{errors.password}</p>}

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={formData.confirmPassword} />
                        {errors.confirmPassword && <p className={RegisterPanelStyle.error}>{errors.confirmPassword}</p>}

                        <label htmlFor="status">Status</label>
                        <select name="status" onChange={handleChange} value={formData.status}>
                            <option value="">Pick a Value</option>
                            <option value="Binusian">Binusian</option>
                            <option value="Non Binusian">Non Binusian</option>
                        </select>
                        {errors.status && <p className={RegisterPanelStyle.error}>{errors.status}</p>}

                        <button type="button" onClick={handleNext}>Next</button>
                    </form>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h2>Register Step 2</h2>
                    <button onClick={handlePrevious}>Back</button>
                    <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} value={formData.fullName} />
                    {errors.fullName && <p className={RegisterPanelStyle.error}>{errors.fullName}</p>}

                    <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                    {errors.email && <p className={RegisterPanelStyle.error}>{errors.email}</p>}

                    <input type="text" name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} value={formData.whatsapp} />
                    {errors.whatsapp && <p className={RegisterPanelStyle.error}>{errors.whatsapp}</p>}

                    <input type="text" name="lineId" placeholder="LINE ID" onChange={handleChange} value={formData.lineId} />
                    {errors.lineId && <p className={RegisterPanelStyle.error}>{errors.lineId}</p>}

                    <input type="text" name="githubId" placeholder="GitHub/GitLab ID" onChange={handleChange} value={formData.githubId} />
                    {errors.githubId && <p className={RegisterPanelStyle.error}>{errors.githubId}</p>}

                    <button type="button" onClick={handleNext}>Next</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2>Register Step 3</h2>
                    <button onClick={handlePrevious}>Back</button>
                    <input type="text" name="birthPlace" placeholder="Birth Place" onChange={handleChange} value={formData.birthPlace} />
                    {errors.birthPlace && <p className={RegisterPanelStyle.error}>{errors.birthPlace}</p>}

                    <input type="date" name="birthDate" onChange={handleChange} value={formData.birthDate} />
                    {errors.birthDate && <p className={RegisterPanelStyle.error}>{errors.birthDate}</p>}

                    <input type="file" name="cvFile" onChange={handleChange} />
                    {errors.cvFile && <p className={RegisterPanelStyle.error}>{errors.cvFile}</p>}

                    <input type="file" name="idCardFile" onChange={handleChange} />
                    {errors.idCardFile && <p className={RegisterPanelStyle.error}>{errors.idCardFile}</p>}

                    <button type="button" onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Register;
