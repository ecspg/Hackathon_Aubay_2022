ds_name
id_campaign_status » 1 a 5
-- Acertando bug na hora de criar data mockada pela primeira vez, criou a coluna id_user_deleted com nvarchar

ALTER TABLE [dbo].[mock_datatblCampaign_1]
ALTER COLUMN [id_user_deleted] [tinyint];

-- Populando a tabela mock_datatblCampaign_1 com campos corretos de registros deletados (além de data ter user)

UPDATE [dbo].[mock_datatblCampaign_1]
SET id_user_deleted = id_user_created
WHERE dt_scheduled_end IS NOT NULL 

-- Inserindo dados do Mock na tbl_Campaign

INSERT INTO dbo.tblCampaign (ds_name, id_campaign_status, ds_title, ds_description, dt_scheduled_begin, dt_scheduled_end, dt_created, dt_deleted, id_user_created, id_user_deleted)
SELECT ds_name, id_campaign_status, ds_titulo, ds_description, dt_scheduled_begin, dt_scheduled_end, dt_created, dt_deleted, id_user_created, id_user_deleted 
FROM dbo.mock_datatblCampaign_1;

-- Inserindo dados Mock na tbl_User, usei o CONVERT para deixar o hs_password da forma correta

INSERT INTO dbo.tblUser (ds_login, ds_name, ds_email, hs_password, dt_created)
SELECT ds_login, ds_name, ds_email, CONVERT(varbinary,hs_password), dt_created 
FROM dbo.user_mock;


-- Housekeeping
DROP TABLE dbo.user_mock;
DROP TABLE dbo.mock_datatblCampaign_1;

-- Mais do mesmo, User Logs agora

INSERT INTO [dbo].[tblUser_Log](
	id_user,
	ds_message,
	dt_log ) 
SELECT * FROM dbo.user_log_mock;

DROP TABLE dbo.user_log_mock;

INSERT INTO [dbo].[tblContact](
	ds_first_name,
	ds_middle_name,
	ds_surname,
	ds_internal_identification,
	dt_created,
	id_user_created)
    SELECT 
    	ds_first_name,
        ds_middle_name,
        ds_surname,
        ds_internal_identification,
        dt_created,
        id_user_created
    FROM
    dbo.mock_contact
	
DROP TABLE dbo.mock_contact;