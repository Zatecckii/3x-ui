class AllSetting {

    constructor(data) {
        this.webListen = this.getEnv('WEB_LISTEN', "");
        this.webDomain = this.getEnv('WEB_DOMAIN', "");
        this.webPort = this.getEnvInt('WEB_PORT', 2053);
        this.webCertFile = this.getEnv('WEB_CERT_FILE', "");
        this.webKeyFile = this.getEnv('WEB_KEY_FILE', "");
        this.webBasePath = this.getEnv('WEB_BASE_PATH', "/");
        this.sessionMaxAge = this.getEnvInt('SESSION_MAX_AGE', 60);
        this.pageSize = this.getEnvInt('PAGE_SIZE', 50);
        this.expireDiff = this.getEnvInt('EXPIRE_DIFF', 0);
        this.trafficDiff = this.getEnvInt('TRAFFIC_DIFF', 0);
        this.remarkModel = this.getEnv('REMARK_MODEL', "-ieo");
        this.datepicker = this.getEnv('DATEPICKER', "gregorian");
        this.tgBotEnable = this.getEnvBool('TG_BOT_ENABLE', false);
        this.tgBotToken = this.getEnv('TG_BOT_TOKEN', "");
        this.tgBotProxy = this.getEnv('TG_BOT_PROXY', "");
        this.tgBotAPIServer = this.getEnv('TG_BOT_API_SERVER', "");
        this.tgBotChatId = this.getEnv('TG_BOT_CHAT_ID', "");
        this.tgRunTime = this.getEnv('TG_RUN_TIME', "@daily");
        this.tgBotBackup = this.getEnvBool('TG_BOT_BACKUP', false);
        this.tgBotLoginNotify = this.getEnvBool('TG_BOT_LOGIN_NOTIFY', false);
        this.tgCpu = this.getEnvInt('TG_CPU', 80);
        this.tgLang = this.getEnv('TG_LANG', "en-US");
        this.xrayTemplateConfig = this.getEnv('XRAY_TEMPLATE_CONFIG', "");
        this.secretEnable = this.getEnvBool('SECRET_ENABLE', false);
        this.subEnable = this.getEnvBool('SUB_ENABLE', false);
        this.subListen = this.getEnv('SUB_LISTEN', "");
        this.subPort = this.getEnvInt('SUB_PORT', 2096);
        this.subPath = this.getEnv('SUB_PATH', "/sub/");
        this.subJsonPath = this.getEnv('SUB_JSON_PATH', "/json/");
        this.subDomain = this.getEnv('SUB_DOMAIN', "");
        this.subCertFile = this.getEnv('SUB_CERT_FILE', "");
        this.subKeyFile = this.getEnv('SUB_KEY_FILE', "");
        this.subUpdates = this.getEnvInt('SUB_UPDATES', 12);
        this.subEncrypt = this.getEnvBool('SUB_ENCRYPT', false);
        this.subShowInfo = this.getEnvBool('SUB_SHOW_INFO', false);
        this.subURI = this.getEnv('SUB_URI', "");
        this.subJsonURI = this.getEnv('SUB_JSON_URI', "");
        this.subJsonFragment = this.getEnv('SUB_JSON_FRAGMENT', "");
        this.subJsonNoises = this.getEnv('SUB_JSON_NOISES', "");
        this.subJsonMux = this.getEnv('SUB_JSON_MUX', "");
        this.subJsonRules = this.getEnv('SUB_JSON_RULES', "");
        this.timeLocation = this.getEnv('TIME_LOCATION', "Asia/Tehran");

        if (data != null) {
            ObjectUtil.cloneProps(this, data);
        }
    }

    getEnv(key, defaultValue) {
        return process.env[key] || defaultValue;
    }

    getEnvInt(key, defaultValue) {
        const value = process.env[key];
        return value ? parseInt(value, 10) : defaultValue;
    }

    getEnvBool(key, defaultValue) {
        const value = process.env[key];
        return value !== undefined ? value.toLowerCase() === 'true' : defaultValue;
    }

    equals(other) {
        return ObjectUtil.equals(this, other);
    }
}
