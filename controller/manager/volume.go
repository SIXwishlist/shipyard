package manager

import (
	"github.com/samalba/dockerclient"
)

func (m DefaultManager) Volumes() ([]*dockerclient.Volume, error) {
	return m.client.ListVolumes()
}
