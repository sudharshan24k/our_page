"use client";

import { useEffect, useRef } from "react";

export function ZohoForm() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear any existing iframe to prevent duplicates on hot-reloads
        containerRef.current.innerHTML = "";

        try {
            const f = document.createElement("iframe");
            let ifrmSrc = "https://forms.zohopublic.in/eduratechnologies1/form/ContactUs/formperma/OuR1yLoZkv-vfeG3rXGNYt853ZPEMUVBkYBWvPG6-to?zf_rszfm=1";

            // Referrer tracking logic from the original script
            if (!(/[?&]referrername=/.test(ifrmSrc))) {
                let rfr = window.location.href;
                try {
                    rfr = window.self !== window.top && window.top ?
                        window.top.location.href :
                        (/^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : "");
                } catch (e) {
                    // Ignore cross-origin errors
                }

                if (rfr && rfr !== "") {
                    if (rfr.length > 1800) {
                        const queryIndex = rfr.indexOf('?');
                        if (queryIndex > -1) {
                            rfr = rfr.substring(0, queryIndex);
                        }
                        if (rfr.length > 1800) {
                            rfr = rfr.substring(0, 1800);
                        }
                    }
                    ifrmSrc += ((ifrmSrc.indexOf('?') > 0) ? '&' : '?') + 'referrername=' + encodeURIComponent(rfr);
                }
            }

            f.src = ifrmSrc;
            f.style.border = "none";
            f.style.height = "936px";
            f.style.width = "100%"; // Changed from 99% to 100% for better layout
            f.style.transition = "all 0.5s ease";
            f.setAttribute("aria-label", "Contact Us");

            containerRef.current.appendChild(f);

            // Resizing listener
            const messageListener = (event: MessageEvent) => {
                const evntData = event.data;
                if (evntData && typeof evntData === "string") {
                    const zf_ifrm_data = evntData.split("|");
                    if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
                        const zf_perma = zf_ifrm_data[0];
                        const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
                        
                        if (f.src.indexOf('formperma') > 0 && f.src.indexOf(zf_perma) > 0) {
                            const prevIframeHeight = f.style.height;
                            const zf_tout = zf_ifrm_data.length === 3;
                            
                            if (zf_tout) {
                                f.scrollIntoView();
                            }

                            if (prevIframeHeight !== zf_ifrm_ht_nw) {
                                if (zf_tout) {
                                    setTimeout(() => {
                                        f.style.height = zf_ifrm_ht_nw;
                                    }, 500);
                                } else {
                                    f.style.height = zf_ifrm_ht_nw;
                                }
                            }
                        }
                    }
                }
            };

            window.addEventListener("message", messageListener, false);

            return () => {
                window.removeEventListener("message", messageListener, false);
            };
        } catch (e) {
            console.error("Error loading Zoho form", e);
        }
    }, []);

    return (
        <div className="w-full bg-[#0a0a0c] rounded-2xl border border-primary/20 overflow-hidden relative shadow-lg">
            <div ref={containerRef} id="zf_div_OuR1yLoZkv-vfeG3rXGNYt853ZPEMUVBkYBWvPG6-to" className="w-full" />
        </div>
    );
}
