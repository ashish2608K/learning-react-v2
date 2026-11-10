import { useState } from "react";

const API = "http://localhost:5000";

const emptyForm = {
    name: "",
    email: "",
    phone: "",
    group_size: "",
    trek: "",
    month: "",
    message: "",
};

const inputClass =
    "h-[46px] rounded-[10px] border border-[#D9D9D9] px-[14px] text-[15px] outline-none focus:border-[#2F6B3A]";

export default function PlanTrek() {
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setStatus("");

        try {
            const res = await fetch(`${API}/api/enquiries`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setStatus("Enquiry received. We will contact you soon!");
            setForm(emptyForm);
        } catch (err) {
            setStatus(err.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <section className="py-[60px]">
            <div className="custom-container">
                <div className="grid overflow-hidden rounded-[28px] bg-[#1F3D2B] lg:grid-cols-2">

                    <div className="flex flex-col justify-center gap-[16px] p-[32px] text-white lg:p-[56px]">
                        <div className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/70">
                            Plan your trek
                        </div>
                        <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1]">
                            Tell us where you want to go
                        </h2>
                        <p className="max-w-[420px] text-[16px] leading-[1.6] text-white/80">
                            Share your dates and group size. Our team will reply within 24 hours
                            with the best route, season and cost for your trip.
                        </p>
                        <ul className="mt-[8px] flex flex-col gap-[10px] text-[15px] text-white/90">
                            <li>✓ Free trek recommendation</li>
                            <li>✓ Certified guides</li>
                            <li>✓ No payment needed to enquire</li>
                        </ul>
                    </div>

                    <div className="p-[16px] lg:p-[24px]">
                        <form
                            onSubmit={handleSubmit}
                            className="flex h-full flex-col gap-[16px] rounded-[20px] bg-white p-[24px] text-[#111111] lg:p-[32px]"
                        >
                            <div className="grid gap-[16px] sm:grid-cols-2">
                                <label className="flex flex-col gap-[6px] text-[13px] font-medium">
                                    Full name
                                    <input name="name" type="text" placeholder="komal" required
                                        value={form.name} onChange={handleChange} className={inputClass} />
                                </label>
                                <label className="flex flex-col gap-[6px] text-[13px] font-medium">
                                    Email
                                    <input name="email" type="email" placeholder="you@email.com" required
                                        value={form.email} onChange={handleChange} className={inputClass} />
                                </label>
                            </div>

                            <div className="grid gap-[16px] sm:grid-cols-2">
                                <label className="flex flex-col gap-[6px] text-[13px] font-medium">
                                    Phone
                                    <input name="phone" type="tel" placeholder="+91 000 000 00"
                                        value={form.phone} onChange={handleChange} className={inputClass} />
                                </label>
                                <label className="flex flex-col gap-[6px] text-[13px] font-medium">
                                    Group size
                                    <input name="group_size" type="number" min="1" max="50" placeholder="2"
                                        value={form.group_size} onChange={handleChange} className={inputClass} />
                                </label>
                            </div>

                            <div className="grid gap-[16px] sm:grid-cols-2">
                                <label className="flex flex-col gap-[6px] text-[13px] font-medium">
                                    Trek
                                    <select name="trek" value={form.trek} onChange={handleChange}
                                        className={`${inputClass} bg-white`}>
                                        <option value="" disabled>Choose a trek</option>
                                        <option>Hampta Pass</option>
                                        <option>Rupin Pass</option>
                                        <option>Brahmatal</option>
                                        <option>Dayara Bugyal</option>
                                        <option>Kedarkantha</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-[6px] text-[13px] font-medium">
                                    Preferred month
                                    <input name="month" type="month"
                                        value={form.month} onChange={handleChange} className={inputClass} />
                                </label>
                            </div>

                            <label className="flex flex-col gap-[6px] text-[13px] font-medium">
                                Message
                                <textarea name="message" rows="4" placeholder="Experience level, special requests..."
                                    value={form.message} onChange={handleChange}
                                    className="rounded-[10px] border border-[#D9D9D9] px-[14px] py-[12px] text-[15px] outline-none focus:border-[#2F6B3A]" />
                            </label>

                            <button
                                type="submit"
                                disabled={saving}
                                className="h-[50px] rounded-full bg-[#111111] text-[15px] font-semibold text-white transition-colors hover:bg-[#2F6B3A] disabled:opacity-60"
                            >
                                {saving ? "Sending..." : "Send enquiry"}
                            </button>

                            {status && <p className="text-[14px]">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}