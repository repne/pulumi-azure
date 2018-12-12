// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage a virtual machine scale set.
 * 
 * ~> **Note:** All arguments including the administrator login and password will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 */
export class ScaleSet extends pulumi.CustomResource {
    /**
     * Get an existing ScaleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScaleSetState, opts?: pulumi.CustomResourceOptions): ScaleSet {
        return new ScaleSet(name, <any>state, { ...opts, id: id });
    }

    /**
     * Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
     */
    public readonly automaticOsUpgrade: pulumi.Output<boolean | undefined>;
    /**
     * A boot diagnostics profile block as referenced below.
     */
    public readonly bootDiagnostics: pulumi.Output<{ enabled?: boolean, storageUri: string } | undefined>;
    /**
     * Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
     */
    public readonly evictionPolicy: pulumi.Output<string | undefined>;
    /**
     * Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
     */
    public readonly extensions: pulumi.Output<{ autoUpgradeMinorVersion?: boolean, name: string, protectedSettings?: string, publisher: string, settings?: string, type: string, typeHandlerVersion: string }[] | undefined>;
    /**
     * Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
     */
    public readonly healthProbeId: pulumi.Output<string | undefined>;
    public readonly identity: pulumi.Output<{ identityIds?: string[], principalId: string, type: string }>;
    /**
     * Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
     */
    public readonly licenseType: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the image from the marketplace.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A collection of network profile block as documented below.
     */
    public readonly networkProfiles: pulumi.Output<{ acceleratedNetworking?: boolean, dnsSettings?: { dnsServers: string[] }, ipConfigurations: { applicationGatewayBackendAddressPoolIds?: string[], applicationSecurityGroupIds?: string[], loadBalancerBackendAddressPoolIds?: string[], loadBalancerInboundNatRulesIds: string[], name: string, primary: boolean, publicIpAddressConfiguration?: { domainNameLabel: string, idleTimeout: number, name: string }, subnetId: string }[], ipForwarding?: boolean, name: string, networkSecurityGroupId?: string, primary: boolean }[]>;
    /**
     * A Virtual Machine OS Profile block as documented below.
     */
    public readonly osProfile: pulumi.Output<{ adminPassword?: string, adminUsername: string, computerNamePrefix: string, customData?: string }>;
    /**
     * A Linux config block as documented below.
     */
    public readonly osProfileLinuxConfig: pulumi.Output<{ disablePasswordAuthentication?: boolean, sshKeys?: { keyData?: string, path: string }[] }>;
    /**
     * A collection of Secret blocks as documented below.
     */
    public readonly osProfileSecrets: pulumi.Output<{ sourceVaultId: string, vaultCertificates?: { certificateStore?: string, certificateUrl: string }[] }[] | undefined>;
    /**
     * A Windows config block as documented below.
     */
    public readonly osProfileWindowsConfig: pulumi.Output<{ additionalUnattendConfigs?: { component: string, content: string, pass: string, settingName: string }[], enableAutomaticUpgrades?: boolean, provisionVmAgent?: boolean, winrms?: { certificateUrl?: string, protocol: string }[] } | undefined>;
    /**
     * Specifies whether the virtual machine scale set should be overprovisioned.
     */
    public readonly overprovision: pulumi.Output<boolean | undefined>;
    /**
     * A plan block as documented below.
     */
    public readonly plan: pulumi.Output<{ name: string, product: string, publisher: string } | undefined>;
    /**
     * Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
     */
    public readonly priority: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
     */
    public readonly rollingUpgradePolicy: pulumi.Output<{ maxBatchInstancePercent?: number, maxUnhealthyInstancePercent?: number, maxUnhealthyUpgradedInstancePercent?: number, pauseTimeBetweenBatches?: string } | undefined>;
    /**
     * Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
     */
    public readonly singlePlacementGroup: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the SKU of the image used to create the virtual machines.
     */
    public readonly sku: pulumi.Output<{ capacity: number, name: string, tier: string }>;
    /**
     * A storage profile data disk block as documented below
     */
    public readonly storageProfileDataDisks: pulumi.Output<{ caching: string, createOption: string, diskSizeGb: number, lun: number, managedDiskType: string }[] | undefined>;
    /**
     * A storage profile image reference block as documented below.
     */
    public readonly storageProfileImageReference: pulumi.Output<{ id?: string, offer?: string, publisher?: string, sku?: string, version?: string }>;
    /**
     * A storage profile os disk block as documented below
     */
    public readonly storageProfileOsDisk: pulumi.Output<{ caching: string, createOption: string, image?: string, managedDiskType: string, name?: string, osType?: string, vhdContainers?: string[] }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
     */
    public readonly upgradePolicyMode: pulumi.Output<string>;
    /**
     * A collection of availability zones to spread the Virtual Machines over.
     */
    public readonly zones: pulumi.Output<string[] | undefined>;

    /**
     * Create a ScaleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScaleSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScaleSetArgs | ScaleSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ScaleSetState = argsOrState as ScaleSetState | undefined;
            inputs["automaticOsUpgrade"] = state ? state.automaticOsUpgrade : undefined;
            inputs["bootDiagnostics"] = state ? state.bootDiagnostics : undefined;
            inputs["evictionPolicy"] = state ? state.evictionPolicy : undefined;
            inputs["extensions"] = state ? state.extensions : undefined;
            inputs["healthProbeId"] = state ? state.healthProbeId : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["licenseType"] = state ? state.licenseType : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkProfiles"] = state ? state.networkProfiles : undefined;
            inputs["osProfile"] = state ? state.osProfile : undefined;
            inputs["osProfileLinuxConfig"] = state ? state.osProfileLinuxConfig : undefined;
            inputs["osProfileSecrets"] = state ? state.osProfileSecrets : undefined;
            inputs["osProfileWindowsConfig"] = state ? state.osProfileWindowsConfig : undefined;
            inputs["overprovision"] = state ? state.overprovision : undefined;
            inputs["plan"] = state ? state.plan : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["rollingUpgradePolicy"] = state ? state.rollingUpgradePolicy : undefined;
            inputs["singlePlacementGroup"] = state ? state.singlePlacementGroup : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["storageProfileDataDisks"] = state ? state.storageProfileDataDisks : undefined;
            inputs["storageProfileImageReference"] = state ? state.storageProfileImageReference : undefined;
            inputs["storageProfileOsDisk"] = state ? state.storageProfileOsDisk : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["upgradePolicyMode"] = state ? state.upgradePolicyMode : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as ScaleSetArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.networkProfiles === undefined) {
                throw new Error("Missing required property 'networkProfiles'");
            }
            if (!args || args.osProfile === undefined) {
                throw new Error("Missing required property 'osProfile'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            if (!args || args.storageProfileOsDisk === undefined) {
                throw new Error("Missing required property 'storageProfileOsDisk'");
            }
            if (!args || args.upgradePolicyMode === undefined) {
                throw new Error("Missing required property 'upgradePolicyMode'");
            }
            inputs["automaticOsUpgrade"] = args ? args.automaticOsUpgrade : undefined;
            inputs["bootDiagnostics"] = args ? args.bootDiagnostics : undefined;
            inputs["evictionPolicy"] = args ? args.evictionPolicy : undefined;
            inputs["extensions"] = args ? args.extensions : undefined;
            inputs["healthProbeId"] = args ? args.healthProbeId : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["licenseType"] = args ? args.licenseType : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkProfiles"] = args ? args.networkProfiles : undefined;
            inputs["osProfile"] = args ? args.osProfile : undefined;
            inputs["osProfileLinuxConfig"] = args ? args.osProfileLinuxConfig : undefined;
            inputs["osProfileSecrets"] = args ? args.osProfileSecrets : undefined;
            inputs["osProfileWindowsConfig"] = args ? args.osProfileWindowsConfig : undefined;
            inputs["overprovision"] = args ? args.overprovision : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["rollingUpgradePolicy"] = args ? args.rollingUpgradePolicy : undefined;
            inputs["singlePlacementGroup"] = args ? args.singlePlacementGroup : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["storageProfileDataDisks"] = args ? args.storageProfileDataDisks : undefined;
            inputs["storageProfileImageReference"] = args ? args.storageProfileImageReference : undefined;
            inputs["storageProfileOsDisk"] = args ? args.storageProfileOsDisk : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["upgradePolicyMode"] = args ? args.upgradePolicyMode : undefined;
            inputs["zones"] = args ? args.zones : undefined;
        }
        super("azure:compute/scaleSet:ScaleSet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ScaleSet resources.
 */
export interface ScaleSetState {
    /**
     * Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
     */
    readonly automaticOsUpgrade?: pulumi.Input<boolean>;
    /**
     * A boot diagnostics profile block as referenced below.
     */
    readonly bootDiagnostics?: pulumi.Input<{ enabled?: pulumi.Input<boolean>, storageUri: pulumi.Input<string> }>;
    /**
     * Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
     */
    readonly evictionPolicy?: pulumi.Input<string>;
    /**
     * Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
     */
    readonly extensions?: pulumi.Input<pulumi.Input<{ autoUpgradeMinorVersion?: pulumi.Input<boolean>, name: pulumi.Input<string>, protectedSettings?: pulumi.Input<string>, publisher: pulumi.Input<string>, settings?: pulumi.Input<string>, type: pulumi.Input<string>, typeHandlerVersion: pulumi.Input<string> }>[]>;
    /**
     * Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
     */
    readonly healthProbeId?: pulumi.Input<string>;
    readonly identity?: pulumi.Input<{ identityIds?: pulumi.Input<pulumi.Input<string>[]>, principalId?: pulumi.Input<string>, type: pulumi.Input<string> }>;
    /**
     * Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
     */
    readonly licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the image from the marketplace.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A collection of network profile block as documented below.
     */
    readonly networkProfiles?: pulumi.Input<pulumi.Input<{ acceleratedNetworking?: pulumi.Input<boolean>, dnsSettings?: pulumi.Input<{ dnsServers: pulumi.Input<pulumi.Input<string>[]> }>, ipConfigurations: pulumi.Input<pulumi.Input<{ applicationGatewayBackendAddressPoolIds?: pulumi.Input<pulumi.Input<string>[]>, applicationSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, loadBalancerBackendAddressPoolIds?: pulumi.Input<pulumi.Input<string>[]>, loadBalancerInboundNatRulesIds?: pulumi.Input<pulumi.Input<string>[]>, name: pulumi.Input<string>, primary: pulumi.Input<boolean>, publicIpAddressConfiguration?: pulumi.Input<{ domainNameLabel: pulumi.Input<string>, idleTimeout: pulumi.Input<number>, name: pulumi.Input<string> }>, subnetId: pulumi.Input<string> }>[]>, ipForwarding?: pulumi.Input<boolean>, name: pulumi.Input<string>, networkSecurityGroupId?: pulumi.Input<string>, primary: pulumi.Input<boolean> }>[]>;
    /**
     * A Virtual Machine OS Profile block as documented below.
     */
    readonly osProfile?: pulumi.Input<{ adminPassword?: pulumi.Input<string>, adminUsername: pulumi.Input<string>, computerNamePrefix: pulumi.Input<string>, customData?: pulumi.Input<string> }>;
    /**
     * A Linux config block as documented below.
     */
    readonly osProfileLinuxConfig?: pulumi.Input<{ disablePasswordAuthentication?: pulumi.Input<boolean>, sshKeys?: pulumi.Input<pulumi.Input<{ keyData?: pulumi.Input<string>, path: pulumi.Input<string> }>[]> }>;
    /**
     * A collection of Secret blocks as documented below.
     */
    readonly osProfileSecrets?: pulumi.Input<pulumi.Input<{ sourceVaultId: pulumi.Input<string>, vaultCertificates?: pulumi.Input<pulumi.Input<{ certificateStore?: pulumi.Input<string>, certificateUrl: pulumi.Input<string> }>[]> }>[]>;
    /**
     * A Windows config block as documented below.
     */
    readonly osProfileWindowsConfig?: pulumi.Input<{ additionalUnattendConfigs?: pulumi.Input<pulumi.Input<{ component: pulumi.Input<string>, content: pulumi.Input<string>, pass: pulumi.Input<string>, settingName: pulumi.Input<string> }>[]>, enableAutomaticUpgrades?: pulumi.Input<boolean>, provisionVmAgent?: pulumi.Input<boolean>, winrms?: pulumi.Input<pulumi.Input<{ certificateUrl?: pulumi.Input<string>, protocol: pulumi.Input<string> }>[]> }>;
    /**
     * Specifies whether the virtual machine scale set should be overprovisioned.
     */
    readonly overprovision?: pulumi.Input<boolean>;
    /**
     * A plan block as documented below.
     */
    readonly plan?: pulumi.Input<{ name: pulumi.Input<string>, product: pulumi.Input<string>, publisher: pulumi.Input<string> }>;
    /**
     * Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
     */
    readonly priority?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
     */
    readonly rollingUpgradePolicy?: pulumi.Input<{ maxBatchInstancePercent?: pulumi.Input<number>, maxUnhealthyInstancePercent?: pulumi.Input<number>, maxUnhealthyUpgradedInstancePercent?: pulumi.Input<number>, pauseTimeBetweenBatches?: pulumi.Input<string> }>;
    /**
     * Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
     */
    readonly singlePlacementGroup?: pulumi.Input<boolean>;
    /**
     * Specifies the SKU of the image used to create the virtual machines.
     */
    readonly sku?: pulumi.Input<{ capacity: pulumi.Input<number>, name: pulumi.Input<string>, tier?: pulumi.Input<string> }>;
    /**
     * A storage profile data disk block as documented below
     */
    readonly storageProfileDataDisks?: pulumi.Input<pulumi.Input<{ caching?: pulumi.Input<string>, createOption: pulumi.Input<string>, diskSizeGb?: pulumi.Input<number>, lun: pulumi.Input<number>, managedDiskType?: pulumi.Input<string> }>[]>;
    /**
     * A storage profile image reference block as documented below.
     */
    readonly storageProfileImageReference?: pulumi.Input<{ id?: pulumi.Input<string>, offer?: pulumi.Input<string>, publisher?: pulumi.Input<string>, sku?: pulumi.Input<string>, version?: pulumi.Input<string> }>;
    /**
     * A storage profile os disk block as documented below
     */
    readonly storageProfileOsDisk?: pulumi.Input<{ caching?: pulumi.Input<string>, createOption: pulumi.Input<string>, image?: pulumi.Input<string>, managedDiskType?: pulumi.Input<string>, name?: pulumi.Input<string>, osType?: pulumi.Input<string>, vhdContainers?: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
     */
    readonly upgradePolicyMode?: pulumi.Input<string>;
    /**
     * A collection of availability zones to spread the Virtual Machines over.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ScaleSet resource.
 */
export interface ScaleSetArgs {
    /**
     * Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
     */
    readonly automaticOsUpgrade?: pulumi.Input<boolean>;
    /**
     * A boot diagnostics profile block as referenced below.
     */
    readonly bootDiagnostics?: pulumi.Input<{ enabled?: pulumi.Input<boolean>, storageUri: pulumi.Input<string> }>;
    /**
     * Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
     */
    readonly evictionPolicy?: pulumi.Input<string>;
    /**
     * Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
     */
    readonly extensions?: pulumi.Input<pulumi.Input<{ autoUpgradeMinorVersion?: pulumi.Input<boolean>, name: pulumi.Input<string>, protectedSettings?: pulumi.Input<string>, publisher: pulumi.Input<string>, settings?: pulumi.Input<string>, type: pulumi.Input<string>, typeHandlerVersion: pulumi.Input<string> }>[]>;
    /**
     * Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
     */
    readonly healthProbeId?: pulumi.Input<string>;
    readonly identity?: pulumi.Input<{ identityIds?: pulumi.Input<pulumi.Input<string>[]>, principalId?: pulumi.Input<string>, type: pulumi.Input<string> }>;
    /**
     * Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
     */
    readonly licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the name of the image from the marketplace.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A collection of network profile block as documented below.
     */
    readonly networkProfiles: pulumi.Input<pulumi.Input<{ acceleratedNetworking?: pulumi.Input<boolean>, dnsSettings?: pulumi.Input<{ dnsServers: pulumi.Input<pulumi.Input<string>[]> }>, ipConfigurations: pulumi.Input<pulumi.Input<{ applicationGatewayBackendAddressPoolIds?: pulumi.Input<pulumi.Input<string>[]>, applicationSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>, loadBalancerBackendAddressPoolIds?: pulumi.Input<pulumi.Input<string>[]>, loadBalancerInboundNatRulesIds?: pulumi.Input<pulumi.Input<string>[]>, name: pulumi.Input<string>, primary: pulumi.Input<boolean>, publicIpAddressConfiguration?: pulumi.Input<{ domainNameLabel: pulumi.Input<string>, idleTimeout: pulumi.Input<number>, name: pulumi.Input<string> }>, subnetId: pulumi.Input<string> }>[]>, ipForwarding?: pulumi.Input<boolean>, name: pulumi.Input<string>, networkSecurityGroupId?: pulumi.Input<string>, primary: pulumi.Input<boolean> }>[]>;
    /**
     * A Virtual Machine OS Profile block as documented below.
     */
    readonly osProfile: pulumi.Input<{ adminPassword?: pulumi.Input<string>, adminUsername: pulumi.Input<string>, computerNamePrefix: pulumi.Input<string>, customData?: pulumi.Input<string> }>;
    /**
     * A Linux config block as documented below.
     */
    readonly osProfileLinuxConfig?: pulumi.Input<{ disablePasswordAuthentication?: pulumi.Input<boolean>, sshKeys?: pulumi.Input<pulumi.Input<{ keyData?: pulumi.Input<string>, path: pulumi.Input<string> }>[]> }>;
    /**
     * A collection of Secret blocks as documented below.
     */
    readonly osProfileSecrets?: pulumi.Input<pulumi.Input<{ sourceVaultId: pulumi.Input<string>, vaultCertificates?: pulumi.Input<pulumi.Input<{ certificateStore?: pulumi.Input<string>, certificateUrl: pulumi.Input<string> }>[]> }>[]>;
    /**
     * A Windows config block as documented below.
     */
    readonly osProfileWindowsConfig?: pulumi.Input<{ additionalUnattendConfigs?: pulumi.Input<pulumi.Input<{ component: pulumi.Input<string>, content: pulumi.Input<string>, pass: pulumi.Input<string>, settingName: pulumi.Input<string> }>[]>, enableAutomaticUpgrades?: pulumi.Input<boolean>, provisionVmAgent?: pulumi.Input<boolean>, winrms?: pulumi.Input<pulumi.Input<{ certificateUrl?: pulumi.Input<string>, protocol: pulumi.Input<string> }>[]> }>;
    /**
     * Specifies whether the virtual machine scale set should be overprovisioned.
     */
    readonly overprovision?: pulumi.Input<boolean>;
    /**
     * A plan block as documented below.
     */
    readonly plan?: pulumi.Input<{ name: pulumi.Input<string>, product: pulumi.Input<string>, publisher: pulumi.Input<string> }>;
    /**
     * Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
     */
    readonly priority?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
     */
    readonly rollingUpgradePolicy?: pulumi.Input<{ maxBatchInstancePercent?: pulumi.Input<number>, maxUnhealthyInstancePercent?: pulumi.Input<number>, maxUnhealthyUpgradedInstancePercent?: pulumi.Input<number>, pauseTimeBetweenBatches?: pulumi.Input<string> }>;
    /**
     * Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
     */
    readonly singlePlacementGroup?: pulumi.Input<boolean>;
    /**
     * Specifies the SKU of the image used to create the virtual machines.
     */
    readonly sku: pulumi.Input<{ capacity: pulumi.Input<number>, name: pulumi.Input<string>, tier?: pulumi.Input<string> }>;
    /**
     * A storage profile data disk block as documented below
     */
    readonly storageProfileDataDisks?: pulumi.Input<pulumi.Input<{ caching?: pulumi.Input<string>, createOption: pulumi.Input<string>, diskSizeGb?: pulumi.Input<number>, lun: pulumi.Input<number>, managedDiskType?: pulumi.Input<string> }>[]>;
    /**
     * A storage profile image reference block as documented below.
     */
    readonly storageProfileImageReference?: pulumi.Input<{ id?: pulumi.Input<string>, offer?: pulumi.Input<string>, publisher?: pulumi.Input<string>, sku?: pulumi.Input<string>, version?: pulumi.Input<string> }>;
    /**
     * A storage profile os disk block as documented below
     */
    readonly storageProfileOsDisk: pulumi.Input<{ caching?: pulumi.Input<string>, createOption: pulumi.Input<string>, image?: pulumi.Input<string>, managedDiskType?: pulumi.Input<string>, name?: pulumi.Input<string>, osType?: pulumi.Input<string>, vhdContainers?: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
     */
    readonly upgradePolicyMode: pulumi.Input<string>;
    /**
     * A collection of availability zones to spread the Virtual Machines over.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
