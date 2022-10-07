sp_configure 'show advanced options', 1;
GO
RECONFIGURE;
GO
 
sp_configure 'Database Mail XPs', 1;
GO
RECONFIGURE
GO


-- Create a Database Mail profile  

EXECUTE msdb.dbo.sysmail_add_profile_sp  
    @profile_name = 'Notifications',  
    @description = 'Profile used for sending outgoing notifications using Gmail.' ;  
GO


-- Grant access to the profile to the DBMailUsers role  
EXECUTE msdb.dbo.sysmail_add_principalprofile_sp  
    @profile_name = 'Notifications',  
    @principal_name = 'public',  
    @is_default = 1 ;
GO

-- Create a Database Mail account   // Radix Account

EXECUTE msdb.dbo.sysmail_add_account_sp  
    @account_name = 'Radix Mail',  
    @description = 'Mail account for sending outgoing notifications.',  
    @email_address = 'testdotnet@mailtest.radixweb.net',  
    @display_name = 'Automated Mailer',  
    @mailserver_name = 'mail.mailtest.radixweb.net',
    @port = 587,
    @enable_ssl = 1,
    @username = 'testdotnet@mailtest.radixweb.net',
    @password = 'deep70' ;  
GO

-- Add the account to the profile  
EXECUTE msdb.dbo.sysmail_add_profileaccount_sp  
    @profile_name = 'Notifications',  
    @account_name = 'Radix Mail',  
    @sequence_number =1 ;  
GO




--Test Mail
EXEC msdb.dbo.sp_send_dbmail
     @profile_name = 'Notifications',
     @recipients = 'gjnayak522@gmail.com',
     @body = 'The database mail configuration was completed successfully.',
     @subject = 'Automated Success Message';
GO

EXEC msdb.dbo.sp_send_dbmail
     @profile_name = 'Mail Test Radixweb 2',
     @recipients = 'ankitrudani234@gmail.com',
     @body = 'Okay it is working fine',
     @subject = 'Testing';
GO


--Send e-mail from a trigger

USE OrderManagement

SELECT * FROM Users

GO

CREATE OR ALTER TRIGGER User_Insert_notification
       ON Users
AFTER INSERT
AS
BEGIN
       SET NOCOUNT ON;
	     
		 DECLARE @emailAddress VARCHAR(50);
		 SELECT @emailAddress = INSERTED.EmailAddress FROM INSERTED;

		   EXEC msdb.dbo.sp_send_dbmail
			 @profile_name = 'Notifications',
			 @recipients = @emailAddress,
			 @body = 'Account Created Succeesfully',
			 @subject = 'Testing';

END


INSERT INTO Users VALUES ('Ankit','123','ankitrudani234@gmail.com')
INSERT INTO Users VALUES ('Gautam','123','gjnayak522@gmail.com')


--Mail Profiler
SELECT * FROM msdb.dbo.sysmail_profile

--Mail Items/All Mails
SELECT * FROM msdb.dbo.sysmail_mailitems

--Logs if error
SELECT * FROM msdb.dbo.sysmail_log

Select * from msdb.dbo.sysmail_account




select * from msdb.dbo.sysmail_faileditems
select * from msdb.dbo.sysmail_sentitems


