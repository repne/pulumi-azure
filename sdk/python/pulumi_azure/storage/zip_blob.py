# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class ZipBlob(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, attempts=None, content_type=None, name=None, parallelism=None, resource_group_name=None, size=None, content=None, source_uri=None, storage_account_name=None, storage_container_name=None, type=None):
        """Create a ZipBlob resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['attempts'] = attempts

        __props__['content_type'] = content_type

        __props__['name'] = name

        __props__['parallelism'] = parallelism

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['size'] = size

        __props__['content'] = content

        __props__['source_uri'] = source_uri

        if not storage_account_name:
            raise TypeError('Missing required property storage_account_name')
        __props__['storage_account_name'] = storage_account_name

        if not storage_container_name:
            raise TypeError('Missing required property storage_container_name')
        __props__['storage_container_name'] = storage_container_name

        __props__['type'] = type

        __props__['url'] = None

        super(ZipBlob, __self__).__init__(
            'azure:storage/zipBlob:ZipBlob',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

