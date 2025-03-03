class FXMLHttpRequest {
    constructor() {
        this.response = null;
        this.status = 200;
        this.onreadystatechange = null;
    }

    open(method, url) {
        this.method = method;
        this.url = url;
    }

    send() {
        console.log(`FAJAX: שולח בקשה ל-${this.url}`);

        setTimeout(() => {
            if (Math.random() < 0.3) {  // 30% איבוד הודעות
                console.log("FAJAX: הבקשה נכשלה (איבוד נתונים)");
                return;
            }

            this.response = { message: "הבקשה בוצעה בהצלחה!" };
            if (this.onreadystatechange) this.onreadystatechange();
        }, Math.random() * 2000 + 1000);  // השהיה בין 1-3 שניות
    }
}
