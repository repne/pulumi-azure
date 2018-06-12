# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class NatRule(pulumi.CustomResource):
    """
    Create a LoadBalancer NAT Rule.
    
    ~> **NOTE** When using this resource, the LoadBalancer needs to have a FrontEnd IP Configuration Attached
    """
    def __init__(__self__, __name__, __opts__=None, backend_port=None, enable_floating_ip=None, frontend_ip_configuration_name=None, frontend_port=None, loadbalancer_id=None, location=None, name=None, protocol=None, resource_group_name=None):
        """Create a NatRule resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not backend_port:
            raise TypeError('Missing required property backend_port')
        elif not isinstance(backend_port, int):
            raise TypeError('Expected property backend_port to be a int')
        __self__.backend_port = backend_port
        """
        The port used for internal connections on the endpoint. Possible values range between 1 and 65535, inclusive.
        """
        __props__['backendPort'] = backend_port

        if enable_floating_ip and not isinstance(enable_floating_ip, bool):
            raise TypeError('Expected property enable_floating_ip to be a bool')
        __self__.enable_floating_ip = enable_floating_ip
        """
        Enables the Floating IP Capacity, required to configure a SQL AlwaysOn Availability Group.
        """
        __props__['enableFloatingIp'] = enable_floating_ip

        if not frontend_ip_configuration_name:
            raise TypeError('Missing required property frontend_ip_configuration_name')
        elif not isinstance(frontend_ip_configuration_name, basestring):
            raise TypeError('Expected property frontend_ip_configuration_name to be a basestring')
        __self__.frontend_ip_configuration_name = frontend_ip_configuration_name
        """
        The name of the frontend IP configuration exposing this rule.
        """
        __props__['frontendIpConfigurationName'] = frontend_ip_configuration_name

        if not frontend_port:
            raise TypeError('Missing required property frontend_port')
        elif not isinstance(frontend_port, int):
            raise TypeError('Expected property frontend_port to be a int')
        __self__.frontend_port = frontend_port
        """
        The port for the external endpoint. Port numbers for each Rule must be unique within the Load Balancer. Possible values range between 1 and 65534, inclusive.
        """
        __props__['frontendPort'] = frontend_port

        if not loadbalancer_id:
            raise TypeError('Missing required property loadbalancer_id')
        elif not isinstance(loadbalancer_id, basestring):
            raise TypeError('Expected property loadbalancer_id to be a basestring')
        __self__.loadbalancer_id = loadbalancer_id
        """
        The ID of the LoadBalancer in which to create the NAT Rule.
        """
        __props__['loadbalancerId'] = loadbalancer_id

        if location and not isinstance(location, basestring):
            raise TypeError('Expected property location to be a basestring')
        __self__.location = location
        __props__['location'] = location

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Specifies the name of the NAT Rule.
        """
        __props__['name'] = name

        if not protocol:
            raise TypeError('Missing required property protocol')
        elif not isinstance(protocol, basestring):
            raise TypeError('Expected property protocol to be a basestring')
        __self__.protocol = protocol
        """
        The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
        """
        __props__['protocol'] = protocol

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        elif not isinstance(resource_group_name, basestring):
            raise TypeError('Expected property resource_group_name to be a basestring')
        __self__.resource_group_name = resource_group_name
        """
        The name of the resource group in which to create the resource.
        """
        __props__['resourceGroupName'] = resource_group_name

        __self__.backend_ip_configuration_id = pulumi.runtime.UNKNOWN
        __self__.frontend_ip_configuration_id = pulumi.runtime.UNKNOWN

        super(NatRule, __self__).__init__(
            'azure:lb/natRule:NatRule',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'backendIpConfigurationId' in outs:
            self.backend_ip_configuration_id = outs['backendIpConfigurationId']
        if 'backendPort' in outs:
            self.backend_port = outs['backendPort']
        if 'enableFloatingIp' in outs:
            self.enable_floating_ip = outs['enableFloatingIp']
        if 'frontendIpConfigurationId' in outs:
            self.frontend_ip_configuration_id = outs['frontendIpConfigurationId']
        if 'frontendIpConfigurationName' in outs:
            self.frontend_ip_configuration_name = outs['frontendIpConfigurationName']
        if 'frontendPort' in outs:
            self.frontend_port = outs['frontendPort']
        if 'loadbalancerId' in outs:
            self.loadbalancer_id = outs['loadbalancerId']
        if 'location' in outs:
            self.location = outs['location']
        if 'name' in outs:
            self.name = outs['name']
        if 'protocol' in outs:
            self.protocol = outs['protocol']
        if 'resourceGroupName' in outs:
            self.resource_group_name = outs['resourceGroupName']