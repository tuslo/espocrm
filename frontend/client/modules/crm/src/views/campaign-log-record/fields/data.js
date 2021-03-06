/************************************************************************
 * This file is part of EspoCRM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2015 Yuri Kuznetsov, Taras Machyshyn, Oleksiy Avramenko
 * Website: http://www.espocrm.com
 *
 * EspoCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * EspoCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with EspoCRM. If not, see http://www.gnu.org/licenses/.
 ************************************************************************/


Espo.define('Crm:Views.CampaignLogRecord.Fields.Data', 'Views.Fields.Base', function (Dep) {

    return Dep.extend({

        listTemplate: 'crm:campaign-log-record.fields.data.detail',

    	getValueForDisplay: function () {
    		var action = this.model.get('action');

    		switch (action) {
    			case 'Sent':
    				return this.model.get('stringData');
    			case 'Clicked':
    				return '<span class="text-success">' + this.model.get('stringData') + '</span>';
                case 'Opted Out':
                    return '<span class="text-muted">' + this.model.get('stringData') + '</span>';
                case 'Bounced':
                    var emailAddress = this.model.get('stringData');
                    var type = this.model.get('stringAdditionalData');
                    if (type == 'Hard') {
                        return '<s class="text-danger">' + emailAddress + '</s>';
                    } else {
                        return '<s class="text-muted">' + emailAddress + '</s>';
                    }
    		}
    		return '';
    	}

    });
});


