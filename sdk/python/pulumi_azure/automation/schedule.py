# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Schedule(pulumi.CustomResource):
    """
    Manages a Automation Schedule.
    """
    def __init__(__self__, __name__, __opts__=None, account_name=None, automation_account_name=None, description=None, expiry_time=None, frequency=None, interval=None, month_days=None, monthly_occurrences=None, name=None, resource_group_name=None, start_time=None, timezone=None, week_days=None):
        """Create a Schedule resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['account_name'] = account_name

        __props__['automation_account_name'] = automation_account_name

        __props__['description'] = description

        __props__['expiry_time'] = expiry_time

        if not frequency:
            raise TypeError('Missing required property frequency')
        __props__['frequency'] = frequency

        __props__['interval'] = interval

        __props__['month_days'] = month_days

        __props__['monthly_occurrences'] = monthly_occurrences

        __props__['name'] = name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['start_time'] = start_time

        __props__['timezone'] = timezone

        __props__['week_days'] = week_days

        super(Schedule, __self__).__init__(
            'azure:automation/schedule:Schedule',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

